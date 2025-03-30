const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const { createPost } = require("../db/functions/posts");

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const page = req.query.page || 1;
  const perPage = req.query.count || 10;
  console.log(`Getting page ${page} with ${perPage} results per page`);
  res.json({
    message: `Getting page ${page} with ${perPage} results per page`,
  });
});

postRouter.get("/:id", async (req, res) => {
  const postId = req.params.id;
  console.log(`Getting post id: ${postId}`);
  res.json({ message: `This would be getting post number ${postId}` });
});

postRouter.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newPost = await createPost(title, content);
  res.json(newPost);
});

module.exports = postRouter;
