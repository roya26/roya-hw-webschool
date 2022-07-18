async function list (client){
    
 const res =  await  client.fetchAllAuthors()
    console.log("res",res.data.result)
    .catch(e => console.log(e));
}


module.exports=list ;