const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=>{
  console.log("URL:", req.url);
  console.log("Method:", req.method);
})

server.listen(3001,()=>{
    console.log("Server started on 3001")
})