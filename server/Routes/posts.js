import { getPosts, createPosts } from "../Controllers/posts.js";
import express from "express";
const router = express.Router();
router.get('/', getPosts);
router.get('/', createPosts);
export default router;