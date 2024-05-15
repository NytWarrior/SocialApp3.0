import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import likeRoutes from "./routes/like.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/user.routes.js";
import friendRoutes from "./routes/friend.routes.js";

const __dirname = path.resolve();

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());    //to parse the incoming request with JSON payload(from req.body)
app.use(cookieParser());    //to parse the cookie

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/like", likeRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/friend", friendRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World!!");
// });

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
})