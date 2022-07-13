const fs = require("fs");
const readFn = require("./read")
const path = require("path");

const dataPath = path.join(__dirname + "/../data");

function create(student) {
    const currentStudents = readFn();
    let allId = [];
    // const newStudent=new FormData(student);
    for (const key of currentStudents) {
        if (key = id) {
            allId.push(key[value])
        }
    }
    if ((student.id).include(allId)) {
        throw new Error("this student is already exists")
    } else {
        currentStudents.push(student)
        fs.writeFileSync(dataPath + "/students.json",
            JSON.stringify(currentStudents)
        )
        return "student stored successfully"
    }

}


module.exports = create;