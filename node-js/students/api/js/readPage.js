alert("hi from me")
var btn = document.querySelector("#read_btn")
btn.addEventListener("click",()=>{
fetch("http://localhost:2525/students.html")
.then((res)=>res.text())
.then((res)=>{
    console.log("clicked!");
})
})