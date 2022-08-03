const fs = require("fs");
const path =require("path");
const dataPath = path.join(__dirname+"/data");

function saveUser(userObj){
fs.writeFileSync(dataPath+"/users.json",JSON.stringify(userObj))
return;
}

module.exports=saveUser    