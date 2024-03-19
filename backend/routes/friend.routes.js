import express from "express";
import { sendFriendRequest, acceptFriendRequest, rejectFriendRequest, getAllFriends, getAllRequests } from "../controllers/friend.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getAllFriends);
router.get("/requests", protectRoute, getAllRequests);
router.post("/send/:friendId", protectRoute, sendFriendRequest);
router.put("/accept/:friendId", protectRoute, acceptFriendRequest);
router.delete("/reject/:friendId", protectRoute, rejectFriendRequest);

export default router;