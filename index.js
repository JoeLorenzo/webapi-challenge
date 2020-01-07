const express = require("express")

const server = express()

server.get("/", (req, res) => {
    res.status(200).send("Hello World, from the root path")
})
host = "127.0.0.1"
port = 8080

server.listen(port, ()=> console.log(`server running on ${host}:${port}, better go catch it.`)) 