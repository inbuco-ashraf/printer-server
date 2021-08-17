import winston from 'winston';
import  {join}  from 'path';

// hold the logger instance
let logger = null;

// check the project environment
function isProduction() {
	return process.env.NODE_ENV === 'production';
}


// initalize the looger
export  = () => {
	// return the existing logger instance
	if (logger) return logger;

	// eslint-disable-next-line object-curly-newline
	const { timestamp } = winston.format;

	// create winston logger instance
	logger = winston.createLogger({
		format: winston.format.combine(
			timestamp(),
			winston.format.prettyPrint(),
		),
		transports: [
			new winston.transports.File({
				filename: join(process.cwd() ,'log',"errors.log"),
				level: 'warn',
			}),
		],
		exceptionHandlers: [
			new winston.transports.File({
				filename: join(process.cwd() ,'log',"exceptions.log"),
				level: 'error',
			}),
		],

		// exit node process on error just in the dev environment
		exitOnError: !isProduction,
	});

	// pass unhandledRejection errors to winston
	process.on('unhandledRejection', (exp) => {
		throw exp;
	});

	// print errors on console in the deveolpment env
	if (!isProduction()) {
		logger.clear();
		logger.add(
			new winston.transports.Console({
				handleExceptions: true,
			}),
		);
	}

	return logger;
};
