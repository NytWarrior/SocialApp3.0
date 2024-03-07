import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());    //to parse the incoming request with JSON payload(from req.body)

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
})