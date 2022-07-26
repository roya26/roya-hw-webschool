const fs = require("fs");
const readFn = require("./read");
const path = require("path");
const dataPath = path.join(__dirname + "/../data");


function update(studentToUpdate) {
  console.log("the student to update :", studentToUpdate);
  const currentStudents = JSON.parse(readFn());
  for (const student of currentStudents) {
    if (student.id === studentToUpdate.id) {
      for (const key in studentToUpdate) {
        if (studentToUpdate[key] && key !== "id") {
          student[key] = studentToUpdate[key];

        }

      }
      fs.writeFileSync(dataPath + "/students.json", JSON.stringify(currentStudents));
      return `The student with id: ${student.id} has updated successfully`
    }
  }
  return `The student with id: ${studentToUpdate.id} not found`
}






module.exports = update;