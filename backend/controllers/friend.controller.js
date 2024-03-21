import Friend from "../models/friend.model.js";

export const getAllFriends = async () => {
    console.log("getAllFriends");
};

export const getAllRequests = async (req, res) => {
    // console.log("getAllRequests");
    try {
        const userId = req.user._id;
        const requestsRec = await Friend.find({ to_user: userId, status: "pending" }).populate("from_user");
        const requestsSent = await Friend.find({ from_user: userId, status: "pending" }).populate("to_user");
        res.status(200).json({ requestsRec, requestsSent });
    } catch (error) {
        console.log("Error in getAllRequests controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const sendFriendRequest = async (req, res) => {

    try {
        // console.log(req);
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        // console.log("sendFriendRequest: ", receiverId);
        // console.log("sendFriendRequest: ", senderId);

        const newFriendRequest = new Friend({
            from_user: senderId,
            to_user: receiverId
        });

        if (newFriendRequest) {
            await newFriendRequest.save();
            res.status(201).json({ message: "Friend request sent successfully" });
        }
        else {
            res.status(400).json({ error: "Invalid friend request data" });
        }

    } catch (error) {
        console.log("Error in sendFriendRequest controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const acceptFriendRequest = async (friendId) => {
    console.log("acceptFriendRequest: ", friendId);
};

export const rejectFriendRequest = async (friendId) => {
    console.log("rejectFriendRequest: ", friendId);
};