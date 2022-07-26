const form = document.getElementById("f");
const body = document.querySelector("body");
const p = document.createElement("p");

function displayMsg(msg) {
    p.innerText = msg
    body.append(p);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked submit");
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
        jsonData[key] = value;

        console.log(jsonData);
    }
    fetch("http://localhost:2121/crud",
        {
            method: "POST",
            body: JSON.stringify(jsonData)
        })
        .then((res) => res.text())
        .then((res) => displayMsg(res))
})