const btn= document.querySelector("button")


btn.addEventListener("click",()=>{
   fetch("http://localhost:3434/btn")
   .then((res)=>res.text())
   .then((res)=>{
    console.log("Your message is :", res)
   })

})