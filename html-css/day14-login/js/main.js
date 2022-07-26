

FormElems.username.addEventListener("input", checkValidEmail);
function login() {FormElems.username.style.border = "";FormElems.password.style.border = "";var username = FormElems.username.value;var password = FormElems.password.value;if (username && password) {var fName = "";for (let i = 0; i < Users.length; i++) {const u = Users[i];if (u.username == username && u.password == password) {fName = u.fName;break;}}if (fName) {var h1 = document.createElement("h1");h1.innerText = `Welcome, ${fName}`;FormElems.main.innerHTML = "";FormElems.main.append(h1);} else {alert("Wrong credentials");}} else {if (!username) {FormElems.username.style.border = "solid red 3px";}if (!password) {FormElems.password.style.border = "solid red 3px";}}}

function checkValidEmail() {
  FormElems.username.style.borderColor = "rgba(0,0,0,0)";
  var x = FormElems.username.value;
  var y = FormElems.password.value;
  if (x.includes(" ")) {
    FormElems.username.value = x.replace(" ", "");
  }
  if (x.length < 6 || !x.includes(".") || !x.includes("@")) {
    FormElems.username.style.borderColor = "red";
  }

  var tries = 0;
  if (!x == true || !y == true) {
      for (let i = 0; i < 3; i++) {
    var tries = [i];
if (tries == 2){
    alert("Too many tries!");
    FormElems.button.removeEventListener("click",login);
  }


}
    
}else {
    login()
}


}

