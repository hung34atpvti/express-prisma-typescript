import { Book } from "../model/book";
import express, { NextFunction, Request, Response } from "express";
import bookService from "../service/book.service";

const bookController = express.Router();

bookController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books: Book[] = await bookService.findAll();
      res.status(200).json({
        message: "success",
        data: books,
      });
    } catch (error) {
      return next(error);
    }
  }
);

bookController.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await bookService.createOne(req.body as Book);
      res.status(201).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      return next(error);
    }
  }
);

bookController.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await bookService.findById(+req?.params?.id);
      res.status(200).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      return next(error);
    }
  }
);

bookController.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await bookService.updateById(
        +req?.params?.id,
        req.body as Book
      );
      res.status(200).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      return next(error);
    }
  }
);

bookController.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await bookService.deleteById(+req?.params?.id);
      res.status(200).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      return next(error);
    }
  }
);

export default bookController;
