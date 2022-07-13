const greetInHebrew = require(__dirname + "/he.js")
const greetInEnlish = require(__dirname + "/en.js")
const greetInFrance = require(__dirname + "/fr.js")
const arguments = process.argv.slice(2)
const name = arguments[0]
const language = arguments[1]

switch (language) {
  case "he":
    greetInHebrew(name)
    break;
  case "en":
    greetInEnlish(name)
    break;
  case "fr":
    greetInFrance(name)
    break;

}
console.log(__dirname + "./he.js")
