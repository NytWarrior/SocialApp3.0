import express from "express";
import { createComment, destroyComment, getComments, updateComment } from "../controllers/comment.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createComment);
router.get("/:id", protectRoute, getComments);
router.delete("/destroy/:id", protectRoute, destroyComment);
router.put("/update/:id", protectRoute, updateComment);

export default router;