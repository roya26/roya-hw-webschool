const express = require("express")
const app = express()
app.listen(2000, () => {
    console.log("is listening on port 2000 server");
})
app.use(express.json())


const apiFunctions = require("./apiFunctions/apiFunctions.js")

app.get("/",  (req, res) => {
    const currentUsers = apiFunctions.read()
     res.send("currentUsers",currentUsers)
})

app.post("/post",(req,res)=>{
    const doc =req.body
await apiFunctions.create(doc)
res.send("the document created successfully")
})

app.delete("/delete/:idToDel",(req,res)=>{
    const doc = req.body
    apiFunctions.deleteUser(doc)
    res.send("the document deleted successfully") 
})

app.put("/put/:idToUp",(req,res)=>{
    const doc = req.body
    apiFunctions.update(doc)
    res.send("the document updated successfully") 
})