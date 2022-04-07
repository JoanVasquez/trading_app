import { NextFunction, Request, Response } from "express";
import { ICandle } from "../models/Candle";
import { listData } from "../services/binance.service";

export default class BinanceController {
  getAll = (req: Request, res: Response, next: NextFunction) => {
    const { symbol, interval } = req.params;

    listData(symbol, interval)
      .then((data: Array<ICandle>) => res.send(data))
      .catch((err) => next(err));
  };
}
