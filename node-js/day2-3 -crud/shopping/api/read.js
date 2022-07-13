const fs =require("fs");
const path =require("path")
const dataPath =path.join(__dirname+"/../data");
console.log("dataPath", dataPath) 

function read (){
   const cart = fs.readFileSync (dataPath + "/cart.json","utf-8")
   const jsonCart= JSON.parse(cart)
return jsonCart;
}

module.exports=read; 