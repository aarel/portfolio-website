"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_json_1 = __importDefault(require("../data/posts.json"));
const posts = posts_json_1.default;
const router = (0, express_1.Router)();
// List all posts
router.get("/", (_, res) => res.json(posts));
// Get single post by slug
router.get("/:slug", (req, res) => {
    const post = posts.find((p) => p.slug === req.params.slug);
    if (!post)
        return res.status(404).json({ message: "Post not found" });
    res.json(post);
});
exports.default = router;
