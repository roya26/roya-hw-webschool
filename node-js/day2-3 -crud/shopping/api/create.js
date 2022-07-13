const fs = require("fs");
const read = require("./read");
const path = require("path")
const dataPath = path.join(__dirname + "/../data");


function create(product) {
   const currentCart = read()
for (let i = 0; i < currentCart.length; i++) {
   const currentProduct = currentCart[i];
   if(currentProduct.id===product.id){
      throw new Error("id is already exists");
   }
   
}

   currentCart.push(product);
   fs.writeFileSync(dataPath + "/cart.jason", JSON.stringify(currentCart))
}

module.exports = create;