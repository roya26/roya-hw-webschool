const fs = require("fs");
const readFn = require("./read")
const path = require("path");

const dataPath = path.join(__dirname + "/../data");

function create(student) {
    console.log(student);
    const currentStudents = JSON.parse(readFn());
    // const newStudent=new FormData(student);
    for (const storedStudent of currentStudents) {
        console.log("storedStudent", storedStudent);
        if (storedStudent.id === student.id) {
            return ("Cannot create student, because this id already exists")

        }
    }
    currentStudents.push(student)
    fs.writeFileSync(dataPath + "/students.json",
        JSON.stringify(currentStudents))
    console.log(currentStudents);
    return `Student ${student.name} added successfully`
}






module.exports = create;