const f = document.querySelector("form")
const btn = document.querySelector("button")
const p = document.querySelector("p")

btn.addEventListener("click", (e) => {
    e.preventDefault;
    const dataJson = {}
    const fData = new FormData(f)
    for (const [key, value] of fData) {
        dataJson[key] = value
    }

    fetch("http://localhost:2222/account_balance/", {
        method: GET,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataJson)
    })
        .then((res) => res.json())
        .then((res) => {
            console.log("the res from account balance is: ",res);
        })
})

