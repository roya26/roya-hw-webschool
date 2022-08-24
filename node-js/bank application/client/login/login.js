const f = document.querySelector("form");

f.addEventListener("submit", (e) => {
    e.preventDefault;
    console.log("hi from form");
    jsonData = {}
    const data = new FormData(f)
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("form data is: ",jsonData);
    }
    fetch("http://localhost:2222/api/login", {
    method: "post",
    body: JSON.stringify(jsonData),
    headers: { "content-type": "application/json" }
})
        .then((res) => res.json())
        .then((res) => {
            console.log("res from withdrawing:", res)
        })
})
        