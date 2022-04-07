import express, { Router } from "express";
import BinanceController from "../controllers/binance.controller";

const router: Router = express.Router();
const binanceController: BinanceController = new BinanceController();

router.get("/list/:symbol/:interval", binanceController.getAll);

export default router;
