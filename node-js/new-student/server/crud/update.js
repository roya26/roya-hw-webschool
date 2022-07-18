const fs = require("fs");
const readFn = require("./read");
const path = require("path");
const dataPath = data.join(__dirname + "/../data");

function update(student){
    const currentStudents=readFn();
for (const key in student)
var valueToUpdate = student[key]
if(key=="id")
currentStudents[key]=valueToUpdate[key]
  currentStudents={...currentStudents...student}
  const msg = `The student with id: ${student.id} has updated successfully`
}
if(!student.id){
    throw new Error (`The student with id: ${student.id} not found`)
}