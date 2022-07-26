const fs = require("fs");
const readFn = require("./read")
const path = require("path");
const dataPath = path.join(__dirname + "/../data");

// function deleteStudent(id) {
//    //מה שאני כתבתי
//    if (!id) {
//       console.log("cannot delete without id");
//   }
//     const currentStudents =JSON.parse(readFn()) ;
//     let allId = [];
//     for (const key of currentStudents) {
//         if (key === "id") {
//             allId.push(key[value])
//         }
//     }
//     if (id.include(allId)) {
//         var index = currentStudents.indexOf(id);
//         if (index !== -1) {
//             currentStudents.splice(index, 1);
//             fs.writeFileSync(dataPath + "/students.json",
//                 JSON.stringify(currentStudents))
//             let msg = console.log(`The student with id  ${id} has removed from the list`)

//         }
//     } else {
//         let msg = console.log("this id is not exists");
//     }
//     return msg
// }

function deleteStudent(id) { 
   console.log(id);
   const storedStudents = JSON.parse(readFn());
   //loop on students to( find id
   //check if student was deleted
   let found = false
   console.log("storedStudents before ", storedStudents);
   storedStudents.forEach((student, index) => {
      if (student.id === id) {
         storedStudents.splice(index, 1);
         found = true;
      }
   });
   if (!found) {
      return `id :${id} was not found`
   }
   console.log("storedStudents after ",storedStudents);
   fs.writeFileSync(dataPath + "/students.json", JSON.stringify(storedStudents))
   return `id :${id} was deleted`
}


module.exports = deleteStudent;