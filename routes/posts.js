import express from "express";
import { getPosts } from "../controllers/posts.js";
import verify from "./verifyToken.js";
const router = express.Router();

router.get("/", verify, getPosts);
export default router;
