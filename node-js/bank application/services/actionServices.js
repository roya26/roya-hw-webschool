const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data");

function displayAccount(user) {
  p.innerText = user.accountBlance;
}

function read() {
  const savedData = JSON.parse(fs.readFileSync(dataPath + "/users.json", "utf-8"))
  console.log("all users :", savedData);
  return savedData
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
  if(result){
    const compPass =  await bcrypt.compare(stored.password,data.password)
  }
  if (compPass){
    return true
  }else false 
}


function getBalance(userData) {
  const savedData = read()
  savedData.forEach(
    savedData.userName === userData.userName)
  {
    return accountBalance
  };
}

function withdrawing(userData, ammount) {
  const accountBalance = getBalance(userData)
  if (ammount <= accountBalance) {
    accountBalance = accountBalance - ammount
  } else {
    return "sorry,there is no enough money in your account"
  }
  displayAccount(userData)
}

function deposit(userData,ammount) {
  const accountBalance = getBalance(userData)
  accountBalance = accountBalance + ammount
  displayAccount(userData)
}

function deleteAccount(userData,userName) {
  compareUserName(userData)

}

module.exports = { displayAccount, saveUser, compareUserName, withdrawing, deposit, deleteAccount, getBalance, comparePass}