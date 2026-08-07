const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("Server start ho gya hai ");
    res.end("server start ho gya hai successfully");
});

server.listen(3002, () => {
    console.log("server is running on port 3002");
    
});