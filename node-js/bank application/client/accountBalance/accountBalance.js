const path = require("path")
const dataPath = path.join("../data/user.json")
const btn = document.querySelector("button")
btn.addEventListener("click", displayMsg)
const fs = require("fs");


function displayMsg() {
    console.log("hi from display");
    const text = fs.readFileSync(dataPath)
    console.log("the text is:",text);
    p.innerText = text
}

