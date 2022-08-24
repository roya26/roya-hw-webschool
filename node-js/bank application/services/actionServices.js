const bcrypt = require("bcrypt");
const { Hmac } = require("crypto");
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data");

function read() {
  const savedData = JSON.parse(fs.readFileSync(dataPath + "/users.json", "utf-8"))
  console.log("all users :", savedData);
  return savedData
}

//האם זה נכון ?או עדיף getAccount
function displayAccount(user) {
  const savedData = read();
  for (i = 0; i < savedData.length; i++) {
    const storedData = savedData[i]
    if (storedData.name === user.name) {
      p.innerText = `your recent balance is ${storedData.accountBalance}`;
    }
  }
}


function saveUser(data) {
  const savedData = read();
  const plainPass = data.password
  const hashedPass = bcrypt.hash(plainPass, 10);
  data.password = hashedPass;
  savedData.push(data)
  fs.writeFileSync(dataPath + "/users.json", JSON.stringify(savedData))
  return
}

function compareUserName(data) {
  const savedData = read();
  for (let i = 0; i < savedData.lengh; i++) {
    const storedData = savedData[i]
    if (storedData.userName === data.userName) {
      return true
    } else {
      return false
    }
  }
}

async function comparePass(data) {
  const result = compareUserName(data)
  if (result) {
    const compPass = await bcrypt.compare(stored.password, data.password)
    if (compPass) {
    } return true
  } else false
}

//או זה נכון?
function getBalance(userData) {
  const savedData = read()
  savedData.forEach(
    savedData.userName === userData.userName)
  const accountBalance = savedData.accountBalance
  {
    return accountBalance
  };
}

function withdrawing(userData) {
  const savedData =read();
  for (const user of savedData) {
    if(user.userName===userData.userName&&user.password===userData.password){
const resentBalance = getBalance(userData)
 const amount = userData.amount
if (amount <= resentBalance) {
    resentBalance = resentBalance - amount
    user.accountBalance = resentBalance
     fs.writeFileSync(dataPath + "/users.json", JSON.stringify(savedData))
    }else{
      return "sorry,there is no enough money in your account"
  }
    }
  } 
  displayAccount(userData)
}

function deposit(userData) {
  const savedData = read();
  for (const user of savedData) {
    if (user.userName === userData.userName && user.password === userData.password) {
      const amount = userData.amount
      const resentBalance = getBalance(userData)
      resentBalance = resentBalance + amount
      user.accountBalance = resentBalance
    }
    fs.writeFileSync(dataPath+"/users.json",JSON.stringify(savedData))
  }
  displayAccount(userData)
}

function compareConfirm(userData) {
  const savedData = read();
  const confirm = savedData.confimationQuestion
  const confirmValue = userData.confirmVal
  if (confirm === confirmValue) {
    return true
  } else {
    return false
  }
}

// function deleteAccount(userData) {
//   const savedData = read();
//   const resComp = compareUserName(userData);
//   const resComfirm = compareConfirm(userData);
//   if (resComp && resComfirm) {
//     savedData.forEach(user, index) => {
//       if (user.userName === userData.userName) {
//         savedData.splice(index, 1)
//       }
//     }
//   } else return "you are not allowed to delete the account"
// }


module.exports = { displayAccount, saveUser, compareUserName, withdrawing, deposit, getBalance, comparePass, compareConfirm }