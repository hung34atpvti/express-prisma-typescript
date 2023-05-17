import { INTERNAL_SERVER_ERROR, NOT_FOUND } from '../error/error.messages';
import { Errors } from '../error/errors';
import { NextFunction, Request, Response } from 'express';
import loggers from '../logger/loggers';

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ message: NOT_FOUND });
};

export const globalExceptionHandler = (err: Errors, req: Request, res: Response, next: NextFunction) => {
  loggers.error(err);
  if (res.headersSent) {
    return next(err);
  }
  if (500 === err.status) {
    return res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }
  return res.status(err.status).json({ message: err.message });
};
