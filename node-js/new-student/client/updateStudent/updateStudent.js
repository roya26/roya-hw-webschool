const form =document.querySelector("form");

form.addEventListener("submit",(e)=>{
    console.log("clicked from update");
e.preventDefault();
const upJson = {}; 
const studentToUpdate =new FormData(form)
for (const [key,value] of studentToUpdate) {
    upJson[key]=value;
    console.log(upJson);
}
fetch("http://localhost:2121/crud",
{
    method : "UPDATE",
    body :JSON.stringify(upJson)
}).then((res)=>text())
.then((res)=>console.log("response from update :",res))
})