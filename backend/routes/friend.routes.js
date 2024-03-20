import express from "express";
import { sendFriendRequest, acceptFriendRequest, rejectFriendRequest, getAllFriends, getAllRequests } from "../controllers/friend.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getAllFriends);
router.get("/requests", protectRoute, getAllRequests);
router.post("/send/:id", protectRoute, sendFriendRequest);
router.put("/accept/:id", protectRoute, acceptFriendRequest);
router.delete("/reject/:id", protectRoute, rejectFriendRequest);

export default router;