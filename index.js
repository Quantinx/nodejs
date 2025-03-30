const express = require("express");
const server = express();
require("dotenv").config();
server.use(express.json());

const PORT = 9000;

const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: process.env.AUTH_BASEURL,
  clientID: process.env.AUTH_CLIENTID,
  issuerBaseURL: process.env.AUTH_ISSUERURL,
};
server.use(auth(config));

const postRouter = require("./routes/posts");

server.get("/me", (req, res) => {
  const token = req.oidc.user;
  if (!token) {
    res.status(401);
  }
  res.json(token).status(200);
});

server.use("/api/posts", postRouter);

server.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
