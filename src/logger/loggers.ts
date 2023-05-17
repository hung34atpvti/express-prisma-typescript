import * as winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  verbose: 'gray',
  debug: 'blue',
  silly: 'grey',
};

const level = () => {
  const env = process.env.NODE_ENV || 'develop';
  const isDevelopment = env === 'develop';
  return isDevelopment ? 'debug' : 'info';
};

winston.addColors(colors);

const winstonFormatArray = [
  winston.format.errors({ stack: true }),
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: '[LOGGER]',
  }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.align(),
  winston.format.printf((info) => {
    const text = `${info.timestamp} ${info.level}: ${info.message}`;
    return info.stack ? text + '\n' + info.stack : text;
  }),
];

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

if (process.env.NODE_ENV !== 'develop') {
  winstonFormatArray.push(winston.format.json());
}

const formatCombine = winston.format.combine(...winstonFormatArray);

const winstonLogger = winston.createLogger({
  level: level(),
  levels,
  format: formatCombine,
  transports,
});

export default winstonLogger;
