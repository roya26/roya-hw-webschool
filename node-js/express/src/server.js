const express = require("express");
const app = express();
const path = require("path");
const clientPath = path.join(__dirname + "/../client");
const tokenServices = require("../services/tokenServices");
const cookieParser = require("cookie-parser");
const apiRouter = require("../routes/api.route");
const pagesRouter = require("../routes/pages.route")

//MIDDLEWARE

app.use(express.json());
app.use(cookieParser());//req.cookieכדי שיהיה לי 
app.use("/api",apiRouter)
app.use("/",pagesRouter)

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

    //jwt verfication
    if (cookies["loginRes"]) {
        //"loginRes"in koocies
        console.log("the cookies :", cookies["loginRes"]);
        const token = cookies["loginRes"].token
        console.log("the token is:", token);
        const verifyResult = tokenServices.verifyToken(token)
        console.log("the result from verify is:", verifyResult);
        if (verifyResult) {
            res.sendFile(clientPath + "/private/private.html")
        } else {
            console.log("you have a bad token");
            //res.redirect(302,"/signin")
            res.sendFile(clientPath + "/signin/signin.html")
            return;
        }
    }
//     //old code
//     console.log("cookies are: ", cookies);
//     if (cookies["loginRes"]) {
//         if (cookies["loginRes"].loginRes === true) {
//             res.sendFile(clientPath + "/private/private.html")
//             return;
//         }
//     }
//     //res.redirect(302,"/signin")
//     res.sendFile(clientPath + "/signin/signin.html")
//     return;
 })

app.get("/login", (req, res) => {
    res.sendFile(clientPath + "/login/login.html")
    return;
});




