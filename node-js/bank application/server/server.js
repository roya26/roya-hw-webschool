const express = require("express");
const app = express();
const path = require("path")
const clientPath = path.join(__dirname + "/../client")
const services = require("../services/services.js")
app.use(express.json());

app.listen((2222), () => {
   console.log("server listening on port 2222");
})

app.get("/", (req, res) => {
   res.sendFile(clientPath + "/home/home.html")
   return
})

app.get("/register",(req,res)=>{
   res.sendFile(clientPath +"/register/register.html")
   return
})

app.post("api/register",(req,res)=>{
   const data = req.body;
    console.log("The body data from  register request on server is: ",data);
services.saveUser(data)
res.send(JSON.stringify({msg:"register has completed successfully"}))
return
})


app.use("/register", express.static(clientPath + "/register"))

app.use("/", express.static(clientPath + "/home"))

app.put("/", (req, res) => {
   res.set("Access-Cotrol-Allow-Orogin", "*")
   res.send({ msg: 'hi from server' })
   return
})