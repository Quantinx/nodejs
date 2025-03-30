require("dotenv").config();
const { drizzle } = require("drizzle-orm/node-postgres");
const { posts } = require("../schema");
const db = drizzle(process.env.DATABASE_URL);

async function createPost(title, content) {
  console.log(title, content);
  const newPost = await db.insert(posts).values({ title, content }).returning();

  return newPost;
}

module.exports = { createPost };
