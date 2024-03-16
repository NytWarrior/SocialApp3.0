import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
}, {
    timestamps: true
});


const Post = mongoose.model("Post", postSchema);
export default Post;