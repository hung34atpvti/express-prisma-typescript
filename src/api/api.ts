import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import handler from "../handler/handler";
import cors from "cors";
import helmet from "helmet";

const api = express();

if (process.env.NODE_ENV === "develop") {
  api.use(morgan("dev"));
}

api.use(cors());

api.use(helmet());

api.use(express.json());

api.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "success" });
});

api.use("/api/v1", handler);

api.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Not found" });
});

export default api;
