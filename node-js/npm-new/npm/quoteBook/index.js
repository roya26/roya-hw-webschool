const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });
const  args = process.argv.slice(2)
const command =args[0]
const list = require("./api/list")
const author= require("./api/author")

// client
//   .fetchRandom()
//   .then(response => console.log(response.data.result))
//   .catch(e => console.log(e)); 

switch (command) {
  case "list":
    list(client)
    break;
    case "author":
      author(client)
      break;

  default:
    break;
}