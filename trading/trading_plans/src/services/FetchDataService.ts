import axios from "axios";

const API_URL = "http://localhost:8082/api/v1/binance/list";

export const getDataFromAPI = async (symbol: string, interval: string) => {
  try {
    const result = await axios.get(`${API_URL}/${symbol}/${interval}`);
    return result.data;
  } catch (error: any) {
    throw error.message;
  }
};
