const args = process.argv.slice(2)
const command = args[0];
const product = args[1] ? JSON.parse(args[1]) : {};

const read = require("./api/read");
const create = require("./api/create")
const update = require("./api/update")
const deletePro = require("./api/delete")


switch (command) {
    case "read":
        const cart = read();
        console.log("cart", cart)
        break;
    case "create":
        create(product);
        break;
    case "update":
        update(product);
        break;
    case "delete":
        deletePro (product);
        break;

    default:
        break;
}