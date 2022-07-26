// var str = (prompt("Enter your string, please").toLowerCase())  
// var arr = [];
// var str = str.toString();
// var arrCon = 0
// var obj = {};
// function yourString(){

    
// switch (true) {
//      case str = str.includes("a"):
//      obj.vow = ;
//      break;
     
//      case str = str.includes("e"):
//      var arrVow = str;
//     break;
  
//      case str = str.includes("o"):
//      var arrVow = str;
//      break;
//      case str = str.includes("i"):
//      var arrVow = str;
//   break;                   s
//     case str = str.includes("u"):
//     var arrVow = str;
//      break;
// default
//       var arrCon = str;
      
// }


//   var str = (prompt("Enter your string, please").toLowerCase())
    




// alert(`Your string containts the following vowels:${vow} +And the following consonants: ${con}`);
// }

const vowArr = []
const conArr = []
var letters = ""


function str(a) {
    for (let i = 0; a < a.length; i++) {
    const letter = a[i];
    console.log(letters);
    var vow = "aeoiu";

    if (vow.includes(letters)){
        vowArr.push(letters);
    }else conArr.push(letters);
}
vowArr.sort();
conArr.sort();
vowArr.join();
conArr.join();
}

const obj =[{vowArr},{conArr}]

function writeInASentense(a, b){
alert(`Your fullname containts the following vowels: ${vowArr}+ And the following consonants: ${conArr}`);
}


str(prompt("Enter your fullname,please.").toLowerCase());
alert(obj);
writeInASentense(vowArr, conArr)







