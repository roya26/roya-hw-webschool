const fs = require("fs");
const path = require("path")
const read =require("../html/read.js")
const studentPath = path.join(__dirname + "/../data/student.json");


function deleteStudent(){
    const studentsJson= read()
      studentsJson.shift()
    const students=JSON.stringify(studentsJson)
    console.log(students)
    
}