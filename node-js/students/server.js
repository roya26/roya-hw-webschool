const fs = require("fs")
const http = require("http");
const PORT = 2525;
const path = require("path");
const apiPath = path.join(__dirname + "/./api")
// const readFn = require(apiPath + "/js/read.js")
const writeFn = require(__dirname + "/./api/js/add.js")


const server = http.createServer(async (req, res) => {
    const method = req.method;
    const url = req.url;

    switch (url) {
        case "/":
            const thirdGrade = fs.readFileSync(__dirname + "/./api/html/read.html")
            res.end(thirdGrade)
            return;
        case "/read":
            const readJS = fs.readFileSync(apiPath + "/js/readPage.js")
            res.end(readJS)
            return;
        case "/delete":
            const redaJS = fs.readFileSync(apiPath + "/js/delete.js")
            res.end(redaJS)
            return;
        case "/add":
            const addHtml = fs.readFileSync(apiPath + "/html/add.html")
            res.end(addHtml)
            return;
        case "/class":// it is the same,but when we have a big folder it is better to use this way
            fs.createReadStream(apiPath+"/html/class.html").pipe(res)
            case "api/students":
            switch (method) {
                case "POST":
                    //add chunk to one-and then parse
                    res.end("hi from post")
                    const buffer = [];
                    for await (const chunk of req) {
                        buffers.push(chunk);
                    }
                    //all chunks are here
                    const newStudent = Buffer.concat(buffers).toString();
                    console.log("data", JSON.parse(data));
                    //this normal js-now we have to store new student in students.json
                    const msg = writeFn(newStudent);
                    res.end(JSON.stringify({ msg }));
                    break;
                default:
                    break;
            }

        default:
            const notFound = fs.readFileSync(apiPath + "/html/404.html")
            res.end(notFound)
            break;
    }
})


server.listen(PORT);
console.log("The port no 2525 is open to get requests");