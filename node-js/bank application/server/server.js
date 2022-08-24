const express = require("express");
const app = express();
const path = require("path")
const clientPath = path.join(__dirname + "/../client")
const services = require("../services/actionServices.js")
const tokenServices = require("../services/tokenServices")
app.use(express.json());

app.listen((2222), () => {
   console.log("server listening on port 2222");
})

app.get("/", (req, res) => {
   res.sendFile(clientPath + "/home/home.html")
   return
})

app.get("/login", (req, res) => {
   res.sendFile(clientPath + "/login/login.html")
   return
})

app.get("/register", (req, res) => {
   res.sendFile(clientPath + "/register/register.html")
   return
})

app.get("/account_balance", (req, res) => {
   res.sendFile(clientPath + "/account_balance/account_balance.html")
   return
})

app.post("api/register", (req, res) => {
   const data = req.body;
   console.log("The body data from register request on server is: ", data);
   services.saveUser(data)
   res.send(JSON.stringify({ msg: "register has completed successfully" }))
   return
})

app.post("api/login", (req, res) => {
   const data = req.body;
   console.log("The body data from login request on server is: ", data);
   const compResult = services.compareUserName(data)
   if (compResult) {
      const result = services.comparePass(data)
      const userName = data.userName
      const myToken = tokenServices.createToken(userName)
      const token = tokenServices.verifyToken(myToken)
      if (result && token) {
         res.cookies = ("wellcomeRes")
         res.send(JSON.stringify({ msg: `wellcom` }))
      } else return { msg: "wrong username and password" }
   }
   return
})


app.use("/api/actions", express.static(clientPath + "/actions"))

app.use("/login", express.static(clientPath + "/login"))

app.use("/account_balance", express.static(clientPath + "/accountBalance"))

app.use("/register", express.static(clientPath + "/register"))

app.use("/", express.static(clientPath + "/home"))

app.put("/", (req, res) => {
   res.set("Access-Cotrol-Allow-Origin", "*")
   res.send({ msg: 'hi from server' })
   return
})

app.put("/api/actions/withdrawing", (req, res) => {
   const data = req.body
   console.log("the data from withdrawing:", data);
   const ammount = data.ammount
   const result = services.compareUserName(data)
   if (cookies = req.cookies && result) {
      withdrawing(data)
   }
   

})

app.put("/api/actions/deposit", (req, res) => {
   const data = req.body
   console.log("the data from Deposit:", data);
   services.deposit(data)
})

app.delete("/api/actions/delete", (req, res) => {
   const data = req.body
   console.log("the data from delete:", data);
services.withdrawing(data)
})