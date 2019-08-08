const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send({ message: "hello" });
});

module.exports = server;
