// require("dotenv").config();
// const server = require("./api/server");

const server = require("./server");

const port = 4000;
server.listen(port, () => console.log(`API running on port ${port}.`));
