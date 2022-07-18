function  author(client){
    client.fetchByAuthor({ q: "Bruce Lee" })
    .then(res => console.log(res.data.result))
    .catch(e => console.log(e));
}

module.exports=author;