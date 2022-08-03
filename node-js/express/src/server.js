const express = require("express");
const app = express();
const path = require("path");
const clientPath = path.join(__dirname + "/../client");
const userServicesFn = require("../services/userServices");
const fs =require("fs")

    app.listen((4444), () => {
        console.log("server on port 4444 is ready to get requests");
    })

app.get("/", (req, res) => {
    res.send("shalom from express")
    return;
})

app.get("/login", (req, res) => {
    res.send("shalom from login")
    res.sendFile(clientPath + "/login/login.html")
    return;
});

app.post("api/signin", (req, res) => {
    const data = req.body;
    console.log("the body of the request is: ", data);
services.userServicesFn(data)
})

app.post("api/login", (req, res) => {
    const data = req.body;
    console.log("the body of the request is: ", data);
})

//MIDDLEWARE

app.use(express.json());
app.use("login", express.static(clientPath + "/login"))
// app.use((req,res,next)=>{
//     console.log("The request is ",req.url,"The method is: ",req.method);
//     next();
// })
app.use("/signin", express.static(clientPath + "/signin"))

app.get("/signin", (req, res) => {
    res.send("shalom from siginin")
    res.sendFile(clientPath + "/signin/signin.html")
    return;
})