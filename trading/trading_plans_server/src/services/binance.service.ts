import { ICandle } from "../models/Candle";
import axios from "axios";
import { throwError } from "../middlewares/exception.middleware";

const API_URL = "https://api.binance.com/api/v3/klines?symbol=";

export const listData = async (
  symbol: string,
  interval: string
): Promise<any> => {
  try {
    const result = await axios.get(`${API_URL}${symbol}&interval=${interval}`);
    const data: any = result.data[result.data.length - 2];

    return {
      time: data[0] / 1000,
      open: data[1] * 1,
      high: data[2] * 1,
      low: data[3] * 1,
      close: data[4] * 1,
    };
  } catch (error: any) {
    console.log(error.message);
    throw throwError(500, error.message);
  }
};
