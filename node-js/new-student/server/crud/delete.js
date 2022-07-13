const fs = require("fs");
const readFn = require("./read")
const path = require("path");
const dataPath = path.join(__dirname + "/../data");

function deleteStudent(id) {
    const currentStudents = readFn();
    let allId = [];
    for (const key of currentStudents) {
        if (key = id) {
            allId.push(key[value])
        }
    }
    if (id.include(allId)) {
        var index = currentStudents.indexOf(id);
        if (index !== -1) {
            currentStudents.splice(index, 1);
            fs.writeFileSync(dataPath + "/students.json",
                JSON.stringify(currentStudents))
            let msg = console.log("The student with id `${student.id}` has removed from the list")

        }
    } else {
        let msg = console.log("this id is not exists");
    }
    return msg
}