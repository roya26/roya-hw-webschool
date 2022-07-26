
const p = document.getElementById("msg");
const form = document.getElementById("f");
function displayMsg(text) {
    p.innerText = text
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const delJson = {};
    const IdToDelete = new FormData(form)
    for (const [key, value] of IdToDelete) {
        delJson[key] = value;
    }
    console.log(delJson);

    fetch("http://localhost:2121/crud",
        {
            method: "DELETE",
            body: JSON.stringify(delJson)
        })
        .then((res) => res.text())
        .then((res) => displayMsg(res))
})





