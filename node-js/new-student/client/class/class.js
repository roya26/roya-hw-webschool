alert("hi from class")

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch("http://localhost:2121/api/getStudents")
    .then((res)=>res.text())
    .then((res)=>console.log("res from server" ,res))
    
});