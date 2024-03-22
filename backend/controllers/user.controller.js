import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getAllUsers: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getUser = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username }).select("-password");
		res.status(200).json(user);
	}
	catch (error) {
		console.error("Error in getUser: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};