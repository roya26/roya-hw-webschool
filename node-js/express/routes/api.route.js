const express = require("express")
const router = express.Router()
const userServices = require("../services/userServices.js");
const tokenServices = require("../services/tokenServices");
app.use(express.json()); 

router.post("/signin", (req, res) => {
    const data = req.body;
    console.log("the body of the request is: ", data);
    userServices.saveUserData(data);
    res.send(JSON.stringify({ msg: "signin successfully" }));
    return;
})

router.delete("/delete/:idToDel", (req,res) => {
    const id = req.params.idToDel
    //jwt verify a)check if ok,b)check if role is admin
    const cookies = req.cookies;
    //jwt verfication
    if (cookies["loginRes"]) {
        //"loginRes"in koocies
        console.log("the cookies :", cookies["loginRes"]);
        const token = cookies["loginRes"].token
        console.log("the token is:", token);
        const verifyResult = tokenServices.verifyToken(token, true)
    } if (verifyResult) {
    }
    console.log("The ID to delete is:", id);
    res.send();
    return;
})

router.post("/login",async (req,res)=>{
    const data = req.body;
    console.log("the body of the request is: ", data);
    const result = await userServices.compareUserData(data);
    //COOKIES
    if (result &&result.compareResult) {
        //create token
        //role is in :result.role
        const myToken = tokenServices.createToken(result.role);
        res.cookie = ("loginRes", { token: myToken });//jwt 
        res.send(JSON.stringify({ msg: `login: ${result}` }))
        return;
    }
    //res.redirect(302,'/login')
    console.log("the result of comparison is: ", result);
    res.send(JSON.stringify({ msg: `login: ${result}` }))
    return;
})


module.exports = router