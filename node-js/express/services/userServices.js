const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/data");

function saveUserData(userObj) {
    const currentUsersData = JSON.parse(fs.readFileSync(dataPath + "/users.json", "utf-8"))
    currentUsersData.push(userObj)
    fs.writeFileSync(dataPath + "/users.json", JSON.stringify(currentUsersData))
    return;
}


function compareUserData(userData) {
    const currentUsersData = JSON.parse(fs.readFileSync(dataPath + "/users.json", "utf-8"))
    const storedData= {};
for (const [key,value] of currentUsersData) {
storedData[key]=currentUsersData[value]
    
}
}

module.exports = {saveUserData,compareUserData,}    