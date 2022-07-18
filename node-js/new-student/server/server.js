const fs = require("fs");
const http = require("http");
const PORT = 2121;
const path = require("path");
const clientPath = path.join(__dirname + "/../client")
const readFn = require("../server/crud/read")
const createFn = require("../server/crud/create");
const deleteFn = require("./crud/delete");


const server = http.createServer(async (req, res) => {
    const method = req.method;
    const url = req.url
    switch (url) {
        // case "/":
        // const homePage = fs.readFileSync(clientPath+"/home/home.html")
        // res.end(homePage)
        // return;
        case "/":// it is the same,but when we have a big folder it is better to use this way
            fs.createReadStream(clientPath + "/class/class.html").pipe(res);
            return;
        case "/class.js":
            fs.createReadStream(clientPath + "/class/class.js").pipe(res);
            return;
        case "/addStudent":
            fs.createReadStream(clientPath + "/deleteStudent/deleteStudent.html").pipe(res);
            return;
        case "/addStudent.js":
            fs.createReadStream(clientPath + "/addStudent/addStudent.js").pipe(res);
            return;
        case "/deleteStudent":
            fs.createReadStream(clientPath + "/deletStudent/deleteStudent.html").pipe(res);
            return;
        case "/deleteStudent.js":
            fs.createReadStream(clientPath + "/deleteStudent/deleteStudent.js").pipe(res);
            return;

        case "api/getStudents":
            const students = readFn()
            res.en(students);
            return;
        case "api/students":
            switch (method) {
                case "POST":
                    const buffers = [];
                    for await (const chunk of req) {
                        buffers.push(chunk);
                    }
                    const newStudent = JSON.parse(Buffer.concat(buffers).toString());
                    console.log(data);
                    const msg = createFn(newStudent)
                    res.end(JSON.stringify({ msg }));
                    break;
                case "DELETE":
                    const delBuffers = [];
                    for await (const chunk of req) {
                        delBuffers.push(chunk);
                    }
                    const delObj = JSON.parse(Buffer.concat(delBuffers).toString());
                    const id = delObj.id;
                    if(!id){
                        console.log("cannot delete without id");
                        res,end("cannot delete without id")
                        return;
                    }
                    const delmsg =deleteFn(id)
                    console.log(delObj)
                    console.log(delmsg)
                    res.end(); 
                   
            }
 
           


        // default:
        //     const notFoundPage = fs.readFileSync(clientPath + "/404/404.html")
        //     res.end(notFoundPage)
        //     return;
    }
})

server.listen(PORT);
console.log("port 2121 is ready to get requests");
