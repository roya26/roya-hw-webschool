const fs = require("fs");
const path = require("path")
const studentPath = path.join(__dirname + "/../data/student.json");


function read(){
    const students= JSON.stringify(fs.readFileSync(studentPath,"utf-8"));
   console.log(students); 
   return students;
    
}

module.exports=read;