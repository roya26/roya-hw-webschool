const express = require("express");
const app = express();
const path = require("path");
const clientPath = path.join(__dirname + "/../client");
const compareUserDataFn = require("../services/userServices");
const userServices = require("../services/userServices");
const cookieParser = require("cookie-parser");

//MIDDLEWARE

app.use(express.json());
app.use(cookieParser());//req.cookieכדי שיהיה לי 

app.use("/login", express.static(clientPath + "/login"))
// app.use((req,res,next)=>{
//     console.log("The request is ",req.url,"The method is: ",req.method);
//     next();
// })
app.use("/private", express.static(clientPath + "/private"))

app.use("/signin", express.static(clientPath + "/signin"))


app.listen((4444), () => {
    console.log("server on port 4444 is ready to get requests");
})

app.get("/", (req, res) => {
    res.sendFile(clientPath + "/home/home.html")
    return;
})
app.get("/signin", (req, res) => {
    res.sendFile(clientPath + "/signin/signin.html")
    return;
})

app.get("/private", (req, res) => {
    const cookies = req.cookies;
    console.log("cookies are: ", cookies);
    if (cookies["loginRes"]) {
        if (cookies["loginRes"].loginRes === true) {
            res.sendFile(clientPath + "/private/private.html")
            return;
        }
    }
    res.sendFile(clientPath + "/signin/signin.html")
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
    res.send(JSON.stringify({ msg: "signin successfully" }));
    return;
});

app.post("/api/login", async (req, res) => {
    const data = req.body;
    console.log("the body of the request is: ", data);
    const result = await userServices.compareUserData(data);
    //COOKIES
    if (result) {
        res.cookie = ("loginRes", { passedlogin: result });
        res.send(JSON.stringify({ msg: `login: ${result}` }))
        return;
    }
    console.log("the result of comparison is: ", result);
    res.send(JSON.stringify({ msg: `login: ${result}` }))
    return;
});



