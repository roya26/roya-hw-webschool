const loginBtn = document.querySelector("button")
loginBtn.addEventListener("click",()=>{
    fetch("http://localhost:3434/loginBtn")
    .then((res)=>{
        res.text()
    })
    .then((res)=>{
        alert("hi from login button")
    })
})