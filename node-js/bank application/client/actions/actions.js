const depoF = document.getElementById("depoForm");
const withF = document.querySelector("withForm");
const delF = document.querySelector("delForm");


depoF.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log("hi from form");
    jsonData = {}
    let msg =""
    const data = new FormData(depoF)
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("form data is: ",jsonData);
    }
    fetch("http://localhost:2222/api/action/deposit", {
    method: "PUT",
    body: JSON.stringify(jsonData),
    headers: { "content-type": "application/json" }
})
        .then((res) => res.json())
        .then((res) => {
            console.log("res from withdrawing:", res)
        })
})

withF.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log("hi from form");
    jsonData = {}
    let msg =""
    const data = new FormData(withF)
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("form data is: ",jsonData);
    }
    fetch("http://localhost:2222/api/action/withdrawing", {
    method: "PUT",
    body: JSON.stringify(jsonData),
    headers: { "content-type": "application/json" }
})
        .then((res) => res.json())
        .then((res) => {
            console.log("res from withdrawing:", res)
        })
})

delF.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log("hi from form");
    jsonData = {}
    let msg =""
    const data = new FormData(delF)
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("form data is: ",jsonData);
    }
    fetch("http://localhost:2222/api/action/delete", {
    method: "PUT",
    body: JSON.stringify(jsonData),
    headers: { "content-type": "application/json" }
})
        .then((res) => res.json())
        .then((res) => {
            console.log("res from withdrawing:", res)
        })
})