const fs = require("fs");
const path = require("path")
const studentPath = path.join(__dirname + "/../data/student.json");

function read(){
    const students= fs.readFileSync(studentPath,"utf-8");
    return students;
}

module.exports=read;