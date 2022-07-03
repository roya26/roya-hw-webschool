const greetInHebrew =require (__dirname+"/he.js")
const greetInEnglish =require(__dirname+"/en.js")
const greetInFrance =require (__dirname+"/fr.js")
const greetInArrabic =require (__dirname+"/ar.js")
const args = process.argv.slice(2)
const name = (args[0])
const lang = (args[1])


switch (lang) {
    case "he":
greetInHebrew(name)
        break;
        case  "en":
greetInEnglish(name)
            break;
            case  "fr":
greetInFrance(name)
                break;
                case  "ar":
greetInArrabic(name)
                    break;
                    
}


// const data = Buffer.from("hello world")
// console.log("data",data)


// const fs = require("fs")

// const he =fs.readFileSync("./he.js")
// console.log(he)
// const fs = require("fs")
// FileSystem.writeFileSync("./newFile","hi to everybody!")