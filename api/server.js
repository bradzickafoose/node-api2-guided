const express = require("express");

const hubsRouter = require("../hubs/hubs-router.js"); // *** 1

const server = express();

server.get("/", (req, res) => {
    res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/hubs", hubsRouter); // *** 2

// export default server; // ES6 Modules
module.exports = server; // <<<<<<<<<<<<<<<< export the server
