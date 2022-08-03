// const fs =require("fs");
// const path =require("path")
// const dataPath =path.join(__dirname+"/../data");
// console.log("dataPath", dataPath) 

// function read (){
//    const cart = fs.readFileSync (dataPath + "/cart.json","utf-8")
//    const jsonCart= JSON.parse(cart)
// return jsonCart;
// }

// module.exports=read; 



const fs = require("fs");
const path = require("path");
const cartPath = path.join(__dirname + "/../data");


function read() {
   const cart = fs.readFileSync(cartPath + "/cart.json", "utf-8")
   const cartJson = JSON.parse(cart);
   return cartJson;
}

module.exports=read;