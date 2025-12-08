import { Router } from "express";
import data from "../data/posts.json";

interface Post {
  slug: string;
  [key: string]: any;
}

const posts = data as unknown as Post[];

const router = Router();

// List all posts
router.get("/", (_, res) => res.json(posts));

// Get single post by slug
router.get("/:slug", (req, res) => {
  const post = posts.find((p) => p.slug === req.params.slug);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

export default router;
