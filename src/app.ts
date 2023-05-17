import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bookController from './domain/book/controller/book.controller';
import { globalExceptionHandler, notFoundHandler } from './middleware/global.exception.handler';
import morganMiddleware from './middleware/morgan.middleware';

const app = express();

app.use(morganMiddleware);

app.use(cors());

app.use(helmet());

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'success' });
});

app.use('/api/v1/book', bookController);

app.use(notFoundHandler);

app.use(globalExceptionHandler);

export default app;
