import express from "express";
import userRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

// Middleware
app.use(express.json());
app.use("/users", userRoutes);
app.use("/posts", postsRoutes);

app.listen(3000, () => console.log("Server up and running"));
