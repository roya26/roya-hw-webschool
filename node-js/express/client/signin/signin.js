const f = document.querySelector("form");


f.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked submit");
    const jsonData = {};
    const data = new FormData(f);
    for (const [key, value] of data) {
        jsonData[key] = value;
        console.log("jsonData is: ", jsonData);
    }
    fetch("http://localhost:4444/api/signin",
        {
            method: "POST",
            body: JSON.stringify(jsonData),
            headers: { "content-type": "application/json" }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("res from signin:", res)
        });
});
