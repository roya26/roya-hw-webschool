// const fs = require("fs")
// const read = require("./read")
// const path = require("path")
// const dataPath = path.join(__dirname + "/../data");

// function update(productToUpdate) {
//     const currentCart = read()
//     let found = false;
//     for (let i = 0; i < currentCart.length; i++) {
//         const storedProduct = currentCart[i];
//         if (storedProduct.id === productToUpdate.id) {
//             found = true;
// for (const key in productToUpdate) {
//       const valueToUpdate = productToUpdate[key];
//       if(key!=="id"){
//         storedProduct[key]=valueToUpdate;
//       }


// }

//             // storedProduct = { ...storedProduct, ...productToUpdate };
//             // console.log("stored Product updated", storedProduct);
//             // currentCart.splice(i,1);
//             // currentCart.push(storedProduct)
//             fs.writeFileSync(dataPath + "/cart.json", JSON.stringify(currentCart));
//             return;
//         }
//     }

// }


// module.exports = update;


const fs = require("fs");
const readFn = require(__dirname + "/read.js");
const path = require("path");
const dataPath = path.join(__dirname + "/../data");

function update(product) {
    const currentCart = readFn();
    
    for (const storedProduct of currentCart) {
        if (storedProduct.id === product.id) {
            for (const key in product) {
                if (key !== "id") {
                    storedProduct[key] = product[key];
                }
            } 
            fs.writeFileSync(dataPath+"/cart.json",JSON.stringify(currentCart));
            console.log("The product has updated successfully");
        } 
        
    }
  
}




module.exports = update;