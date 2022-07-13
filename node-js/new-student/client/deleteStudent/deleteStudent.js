const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    fetch("http://localhost:2121/api/delete"),
    {method:"DELETE",
    body:JSON.stringify(id)}

.then((res)=>json())
})