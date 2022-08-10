const jwt =require("jsonwebtoken")
const SECRET= "my very very very important secret"

function createToken(userName){
    const token = jwt.sign({msg:"ein od milvado"},userName, { expiresIn: "2000" })
    console.log("token",token);
    return token 
}

function verifyToken(token){
    try {
        const decodedToken = jwt.verify(token,SECRET)
if (decodedToken ){
return true
}else {
    return false
 }
    } catch (error) {
        console.log("the error is:",error);
    }
}


module.exports={createToken, verifyToken}