// This imports our dependencies 
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const middleware = require("./middleware/customMiddleware");

// This imports our routers
const routes = require("./routes/index.routes");

// This defines the express server
const server = express();

// This invokes our dependencies 
// middleware(server);
// routes(server);
server.use(helmet())
server.use(cors())
server.use(express.json())

// This verifies that API is running on our root path
server.get("/", (req, res) => {
    res.status(200).json({ status: "The server is running, better go catch it!!!" });
  });

module.exports = server;

