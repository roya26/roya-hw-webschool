const $ = {
email:document.querySelector(#email),
password:document.querySelector(#password),
email:document.querySelector(button),
main:document.querySelector(main),
}


 var userJSON = localStorage.user;
 const user = userJSON ? JSON.parse(userJSON) :{};
 $.button.addEventListener("click",function(){
      

var email = $.email.value;
var password = $.password.value;
if(userFromDB == email && passwordFromDB == password){
    user.email = email;
    user.password = password;
    userJSON =JSON.stringify(user);
   localStorage.user = userJSON;
   $,main.innerHTML = `welcom, ${userFromDB.fName}`;
   }else {
       alert ("wrong credentials");
   }
 if(user.mail && user.pass){
     if(user.email== userFromDB .email && user.password.token === userFromDB.token){
         $,main.innerHTML = `welcom ${userFromDB.fName};`
     }
 }
}) 
// var l =["a","b","c","d","e","f","g","h","i",
// "j","k","l",,"m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// function makeToken(){
// var a = Math.floor(Math.random() * 10);
// var b = l[Math.floor(math.random()l.length*10)]
// }

function generator() {
    var string = `abcde1fg2hijkl4mnop3qrstu6vwx7yzABCDEFG8HI9JKLMNO0PQRSTUVWXYZ`
var ts = datte.now().tpoString();
for (const i of ts) {
    token+=string[parseInt(Math.random()*string.length)]+i
   }   return token;

}
 
var UsersFromDB = [];

function init(){
var fromLS = localStorage.allUsers;//
if(fromLS){
    fromLS = JSON.parse(fromLS);
}else{
   var UsersFromDB = [
     {
        fName:"roya",
        email:"roya@mail.com",
        token:"token123123123123"
    },
    {
        fName:"meir",
        email:"meir@mail.com",
        token:"token123123123123"
    },
    {
        fName:"naor",
        email:"naor@mail.com",
        token:"token123123123123"
    },
    {
        fName:"efrat",
        email:"efrat@mail.com",
        token:"token123123123123"
    },
    {
        fName:"erez",
        email:"erez@mail.com",
        token:"token123123123123"
    },
] 
}
}
