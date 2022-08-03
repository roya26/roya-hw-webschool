const f = document.querySelector("form");

f.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(f);
    const dataJson = {}
    for (const [key, value] of data) {
        dataJson[key] = value;
    }
    console.log("the data from the form :", dataJson);
    fetch("http://localhost:4444/api/login", {
        method: "POST",
        body: JSON.stringify(dataJson),
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("res from login:", res)
        });
})