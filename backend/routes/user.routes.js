import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getAllUsers, getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllUsers);
router.get("/:username", protectRoute, getUser);

export default router;
