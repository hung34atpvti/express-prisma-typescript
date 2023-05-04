import { Book } from "../model/book";
import { prisma } from "../database/database";
import express, { NextFunction, Request, Response } from "express";

const handler = express.Router();

handler.get(
  "/book",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books: Book[] = await prisma.book.findMany();
      res.status(200).json({
        message: "success",
        data: books,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        error,
      });
    }
  }
);

handler.post(
  "/book",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await prisma.book.create({
        data: {
          name: req?.body?.name,
          author: req?.body?.author,
        },
      });
      res.status(201).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        error,
      });
    }
  }
);

handler.get(
  "/book/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await prisma.book.findUnique({
        where: {
          id: +req?.params?.id,
        },
      });
      res.status(200).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        error,
      });
    }
  }
);

handler.put(
  "/book/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await prisma.book.update({
        where: {
          id: +req?.params?.id,
        },
        data: {
          name: req?.body?.name,
          author: req?.body?.author,
        },
      });
      res.status(200).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        error,
      });
    }
  }
);

handler.delete(
  "/book/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book: Book = await prisma.book.delete({
        where: {
          id: +req?.params?.id,
        },
      });
      res.status(200).json({
        message: "success",
        data: book,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        error,
      });
    }
  }
);

export default handler;
