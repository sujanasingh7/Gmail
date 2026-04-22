import express from "express";
import { GameResult } from "../controller/gamecontroller.js";

const gameRouter = express.Router();

// Get Method

// Post Method
gameRouter.post("/result",GameResult)
// Put Method

// Delete Method



export default gameRouter;
