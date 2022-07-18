const msg = document.getElementById("msg");
const form = document.getElementById("f");

form.addEventListener("submit", (e) => {
    e.preventDefault();
   const delJson = {};  
   const IdToDelete = new FormData(form)
    for (const [key, value] of IdToDelete) {
        delJson [key] =value;               
}
    fetch("http://localhost:2121/api/students",
        {
            method: "DELETE",
            body: JSON.stringify(delJson)
        } ) 
        .then((res) => json())
        .then((res)=>console.log("response from delete server : ",res))
        p.innerText =res
})





