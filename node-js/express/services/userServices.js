const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data");
const bcrypt = require("bcrypt");

function read() {
    const currentUsersData = JSON.parse
        (fs.readFileSync(dataPath + "/users.json", "utf-8"))
    return currentUsersData;
}
async function saveUserData(userObj) {
    const currentUsersData = read();
    //bcrypt password
    const plainPassword = userObj.password;
    const hashedPass = await bcrypt.hash(plainPassword, 10);
    userObj.password = hashedPass;
    currentUsersData.push(userObj);
    fs.writeFileSync(dataPath + "/users.json", JSON.stringify(currentUsersData))
    return;
};




async function compareUserData(userData) {
    const currentUsersData = read();
    for (let i = 0; i < currentUsersData.length; i++) {
        const storedData = currentUsersData[i];
        if (storedData.email === userData.email) {
           const compareResult =await bcrypt.compare(userData.pssword,storedData.password)
            return compareResult;
        }
    }
    return false;
}


module.exports = { saveUserData, compareUserData, }    