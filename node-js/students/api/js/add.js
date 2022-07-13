const fs=require("fs");
const readFn=require(__dirname+"/../read-student/read.js")
const studentPath = path.join(__dirname + "/../data/student.json");  

function write (student){
    const currentStudents=JSON.parse(readFn());
    currentStudents.push(student);
    const newStudent=fs.writeFileSync(studentPath,JSON.stringify(currentStudents));
    return"student stored successfully";
 }

 module.exports=write;