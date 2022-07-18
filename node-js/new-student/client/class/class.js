alert("hi from class")

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch("http://localhost:2121/crud")
    .then((res)=>res.text())
    .then((res)=>console.log("res from server" ,res))
    
});