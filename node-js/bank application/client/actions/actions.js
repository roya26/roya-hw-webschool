const depoF = document.getElementById("depoForm");
const withF = document.querySelector("withForm");
const delF = document.querySelector("delForm");
const btn = document.getElementById("#btn");
const sBtn = document.getElementById("#sBtn");
const tBtn = document.getElementById("#tBtn")

// btn.addEventListener("submit", (e) => {
//     e.preventDefault;
//     console.log("hi from depform");
//     jsonData = {}
//     const data = new FormData(depoF)
//     for (const [key, value] of data) {
//         jsonData[key] = value;
//         console.log("form data is: ",jsonData);
//     }
//     fetch("http://localhost:2222/api/actions/deposit", {
//     method: "PUT",
//     body: JSON.stringify(jsonData),
//     headers: { "content-type": "application/json" }
// })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log("res from deposit:", res)
//         })
// })

sBtn.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log("hi from withform");
    jsonData = {}
    const data = new FormData(withF)
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("form data is: ",jsonData);
    }
    fetch("http://localhost:2222/api/actions/withdrawing", {
    method: "PUT",
    body: JSON.stringify(jsonData),
    headers: { "content-type": "application/json" }
})
        .then((res) => res.json())
        .then((res) => {
            console.log("res from withdrawing:", res)
        })
})

tBtn.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log("hi from delform");
    jsonData = {}
    const data = new FormData(delF)
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("form data is: ",jsonData);
    }
fetch("http://localhost:2222/api/actions1/delete", {
    method: "PUT",
    body: JSON.stringify(jsonData),
    headers: { "content-type": "application/json" }
})
        .then((res) => res.json())
        .then((res) => {
            console.log("res from delete:", res)
        })
})