import express from "express";
import { createPost, destroyPost, getMyPosts, getPost, getPosts, updatePost } from "../controllers/post.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.get("/", protectRoute, getPosts);
router.get("/my-posts", protectRoute, getMyPosts);
router.get("/:id", protectRoute, getPost);
router.put("/update/:id", protectRoute, updatePost);
router.delete("/destroy/:id", protectRoute, destroyPost);

export default router;