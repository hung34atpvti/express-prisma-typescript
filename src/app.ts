import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bookController from "./domain/book/controller/book.controller";

const app = express();

if (process.env.NODE_ENV === "develop") {
  app.use(morgan("dev"));
}

app.use(cors());

app.use(helmet());

app.use(express.json());

app.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "success" });
});

app.use("/api/v1/book", bookController);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ message: `${err}` });
});

export default app;
