const express = require("express")

const server = express()


host = "127.0.0.1"
port = 8080

server.listen(port, ()=> console.log(`server running on ${host}:${port}, better go catch it.`)) 