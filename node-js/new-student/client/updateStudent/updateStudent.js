const form = document.querySelector("form");
const body =document.querySelector("body");
const p = document.createElement("p");

function displayMsg(msg){
    p.innerText =msg;
    body.append(p);
}

form.addEventListener("submit", (e) => {
    console.log("clicked from update");
    e.preventDefault();
    const upJson = {};
    const studentToUpdate = new FormData(form)
    for (const [key, value] of studentToUpdate) {
        upJson[key] = value;
        console.log(upJson);
    }
    fetch("http://localhost:2121/crud",
        {
            method: "PUT",
            body: JSON.stringify(upJson)
        }).then((res) => res.text())
        .then((res) =>displayMsg(res));
})