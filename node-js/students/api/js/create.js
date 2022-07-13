const form = document.getElementsByName("f")

form.addEventListener("submit",(event)=>{
    console.log("submit");
    event.preventDefault();
    const jsonData={};
    const data=new FormData(form);
    for (const [key,value] of data) {
        console.log(key);
        console.log(value);
    }
    fetch("http://localhost:2525/students",
    {method:"POST",body:JSON.stringify(jsonData)})
.then((res)=>res.text())
.then(console.log("The message is ",res))

})