//Nodejs
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Hello World");
        res.end();
    }
})

server.listen(3001);

console.log("Listening on Port 3000...");

//Now we are using express