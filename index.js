require("dotenv").config();
// const express = require("express");
const server = require("./server");

const port = process.env.PORT;
server.listen(port, () => console.log(`API running on port ${port}.`));
