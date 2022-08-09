const f = document.querySelector("form");
f.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked submit");
    const myData = new FormData(f);
    const myDataObj = {};
    for (const [key, value] of myData) {
        {
            myDataObj[key] = value;
            console.log("my data is: ", myDataObj);
        }
    }
    fetch("http://localhost:2222/api/register",
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(myDataObj)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("res from register: ", res);
        })
})