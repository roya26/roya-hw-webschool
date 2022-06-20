

function getInfo(data){
     
var url = "http://api-fulfill.dataexchange.us-east-1.amazonaws.com/v1"
fetch(url,type="GET",apiKey = "9f12dc82")
.then ((resolve)=>{
    return (data)
})
.catch((err)=>{
    if (!status.ok)
    throw(status)
})
}

function matchSearch(){
    var search = document.querySelector("#search").value
}if(search == data){
    return 
}