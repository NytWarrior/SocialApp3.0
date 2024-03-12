import express from "express";
import { createPost, destroyPost, getPost, getPosts, updatePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/", getPosts);
router.get("/post/:id", getPost);
router.put("/update/:id", updatePost);
router.delete("/destroy/:id", destroyPost);

export default router;