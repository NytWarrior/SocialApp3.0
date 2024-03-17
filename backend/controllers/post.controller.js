import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        // console.log(req)
        // console.log("content", req.body.content);
        // console.log("image", req.body.imgUrl);
        // console.log("video", req.body.videoUrl);
        const newPost = new Post({
            content: req.body.content,
            image: req.body.imgUrl,
            video: req.body.videoUrl,
            user: req.user._id
        });
        // console.log(newPost);
        if (newPost) {
            await newPost.save();
            res.status(201).json({ message: "Post created successfully", data: newPost });

        } else {
            res.status(400).json({ error: "Invalid post data" });
        }
    } catch (error) {
        console.log("Error in Create post controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getPost = async (req, res) => {
    console.log("getPost");
};

export const getPosts = async (req, res) => {
    // console.log("getPosts");
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).populate('user');
        res.status(200).json({ data: posts });

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const destroyPost = async (req, res) => {
    console.log("destroyPost");
};

export const updatePost = async (req, res) => {
    console.log("updatePost");
};