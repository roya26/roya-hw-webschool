console.log("process", process.argv)
const args = process.argv.slice(2)

const num1 = parseInt(args[0])
const num2 = parseInt(args[1])
const operation = args[3]

if (isNaN(num1) || isNaN(num2)) {
    throw new Error("please enter a valid number");
}
const op=["+","-","*","/"]
 if (!operation.include(op)){
    throw new Error("unvalid operation");
 }
switch (operation) {
    case "+": {
        console.log(num1 + num2)
        break;
    }
    case "-": {
        console.log(num1 - num2)
        break;
    }
    case "*": {
        console.log(num1 * num2)
        break;
    }
    case "/": {
        console.log(num1 / num2)
        break;
    }
}


