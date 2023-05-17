import morgan from 'morgan';
import loggers from '../logger/loggers';

const loggerStream: morgan.StreamOptions = {
  write: (message) => loggers.http(message.substring(0, message.lastIndexOf('\n'))),
};

const morganMiddleware = morgan(
 'dev',
  {
    stream: loggerStream,
    skip: () => process.env.NODE_ENV !== 'develop',
  }
);

export default morganMiddleware;
