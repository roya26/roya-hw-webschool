const btn= document.querySelector("button");
btn.addEventListener("click",()=>{
    fetch("http://localhost:3000/",{method:'PUT'})
    .then(res=>res.json())
    .then((res)=>{
        console.log("res from js");
    })
})
