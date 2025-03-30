const express = require("express");
const server = express();

const postRouter = require("./routes/posts");

const PORT = 9000;

server.use("/api/posts", postRouter);

server.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
