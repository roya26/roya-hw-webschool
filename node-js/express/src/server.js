const express = require("express");
const app = express();
const path = require("path");
const clientPath = path.join(__dirname + "/../client");
const compareUserDataFn = require("../services/userServices");
const userServices = require("../services/userServices");

    app.listen((4444), () => {
        console.log("server on port 4444 is ready to get requests");
    })

app.get("/", (req, res) => {
    res.sendFile(clientPath+"/home/home.html")
    return;
})

app.get("/login", (req, res) => {
    res.sendFile(clientPath + "/login/login.html")
    return;
});

app.post("/api/signin", (req, res) => {
    const data = req.body;
    console.log("the body of the request is: ", data);
userServices.saveUserData(data);
res.send(JSON.stringify({msg:"signin successfully"}));
return;
})

app.post("/api/login", (req, res) => {
    const data = req.body;
    console.log("the body of the request is: ", data);
userServices.compareUserData(data);
res.send()
return;
})

//MIDDLEWARE

app.use(express.json());

app.use("/login", express.static(clientPath + "/login"))
// app.use((req,res,next)=>{
//     console.log("The request is ",req.url,"The method is: ",req.method);
//     next();
// })
app.use("/signin", express.static(clientPath + "/signin"))

app.get("/signin", (req, res) => {
    res.sendFile(clientPath + "/signin/signin.html")
    return;
})