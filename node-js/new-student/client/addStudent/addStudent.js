const form = document.getElementById("f");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked submit");
     const jsonData={};
     const data=new FormData(form);
     for (const [key,value] of data) {
jsonData[key]=value;
     }
    fetch("http://localhost:2121/api/student",
    {method:"POST",
    body:JSON.stringify(jsonData)
}).then((res)=>json())
.then((res)=>console.log("response from add: ",res))
})