const fs = require("fs")
const http = require("http");
const PORT = 2525;
const path = require("path");
const apiPath = path.join(__dirname + "/./api")
const read=require(apiPath+"/js/read.js")


const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url;

    switch (url) {
        case "/":


            
            break;
    
        default:
            break;
    }
})


server.listen(PORT);
console.log("the port 2525 is open to get request");