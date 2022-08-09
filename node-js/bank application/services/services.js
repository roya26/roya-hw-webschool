const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data");

function displayAccount(user){
    p.innerText = user.accountBlance;
}
  function read(){
    const savedData = fs.readFileSync(dataPath+"/users.json","utf-8")
    console.log("all users :",savedData);
    return savedData
  }


function saveUser(data){
const savedData = read();
const plainPass = data.password
const hashedPass = bcrypt.hash(plainPass,10);
data.password = hashedPass;
savedData.push(data)
fs.writeFileSync(dataPath+"/users.json",JSON.stringify(savedData))
return
}

module.exports={displayAccount,saveUser}