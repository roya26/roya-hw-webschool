const express = require("express")
const { access } = require("fs")
const app = express()


app.put("/",(req,res)=>{
    res.set("Access-Cotrol-Allow-Orogin","*")
    res.send({msg:'hi from server'})
})

app.options("/",(req,res)=>{
    res.set("Access-Control-Request-Method","*")//only PUT   
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})