import app from './app';
import * as database from './database/database';
import dotenv from 'dotenv';
import loggers from './logger/loggers';

dotenv.config();

const {PORT} = process.env;

const startServer = async () => {
  await database.connect();
  app.listen(PORT || 3000, () => {
    loggers.info(`Api listening on port ${PORT}`);
  });
};

startServer().then(() => {
  loggers.info(`Server started`);
});
