const { json } = require("stream/consumers");

const form =document.querySelector("form");
form.addEventListener("submit",(e)=>{
e.preventDefault();
const upJson = {}; 
const studentToUpdate =new FormData(form)
for (const [key,value] of studentToUpdate) {
    upJson[key]=value;
}
fetch("http://localhost/api/students",
{
    method : "UPDATE",
    body :JSON.stringify(upJson)
}).then((res)=>text())
.then((res)=>console.log("response from update :",res))
})