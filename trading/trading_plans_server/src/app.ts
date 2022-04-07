import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/exception.middleware";
import { IError } from "./models/Error";
import binanceRouter from "./routes/binance.route";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/binance", binanceRouter);

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
  next({ status: 404, message: "Not Found" } as IError);
});
app.use(errorHandler);

export default app;
