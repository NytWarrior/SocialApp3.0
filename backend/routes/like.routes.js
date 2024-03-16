import express from "express";
import { toggleLike } from "../controllers/like.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/toggle", protectRoute, toggleLike);

export default router;