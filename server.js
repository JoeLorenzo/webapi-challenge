// This imports our dependencies 
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")

const middleware = require("./middleware/customMiddleware");

// This imports our routers
const actionRouter = require('./actions/actionRouter')
const projectRouter = require('./projects/projectRouter')


// This defines the express server
const server = express();

 
// This invokes our dependencies 
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(morgan())

// This invokes our routes 
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)


// These are our error routes

// This defines our error status 500 message
server.use((err, req, res, next) => {
    res.status(500).json({ error, message: "Opps something went wrong, it's not you, it me." })
})


// This verifies that API is running on our root path
server.get("/", (req, res) => {
    res.status(200).json({ status: "The server is running, better go catch it!!!" });
  });

// This defines a 404 error 
server.use((req, res) => {
    res.status(404).json({ message: "path not found" });
  });

module.exports = server;

