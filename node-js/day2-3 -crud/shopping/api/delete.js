const fs = require("fs");
const path = require("path");
const readFn = require(__dirname + "/read")
const dataPath = path.join(__dirname + "/../data")


function deletePro(idToDelete) {
    const currentCart = readFn();
    for(storedProduct of currentCart){
        if (storedProduct.id === idToDelete.id) {
            const index = currentCart.indexOf(storedProduct)
            currentCart.splice(index, 1);
            console.log("The cart after delete:", currentCart);
            fs.writeFileSync(dataPath + "/cart.json", JSON.stringify(currentCart));
            return 'The id deleted successfully';
        }
    }
    return "id not found";
}



module.exports = deletePro;