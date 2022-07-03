// const p = document.querySelector("p");
// function func1() {
//     setTimeout(() => {
//         p.style.color = "red"
//         setTimeout(() => {
//             p.style.fontSize = "50" + "px"
//             setTimeout(() => {
//                 p.style.fontStyle = "italic"
//                  setTimeout(() => {
//                p.style.color = "purple"
//             }, 5000);
//             }, 5000); 

//         }, 5000);
//     }, 5000);
// }
// func1()

// function func1() {
//     return new promise((res, rej) => {
//         setTimeout(() => {
//             p.style.color = "red"
//             res()
//         }, 5000)
        
//     })
// }
// function func2() {
//     return new promise((res, rej) => {
//         setTimeout(() => {
//             p.style.fontSize = "50" + "px"
//             res()
//         }, 5000)
       
//     })
// }
// function func3() {
//     return new promise((res, rej) => {
//         setTimeout(() => {
//             p.style.fontStyle = "italic"
//             res()
//         }, 5000)
    
//     })
// }
// function func4() {
//     return new promise((res, rej) => {
//         setTimeout(() => {
//             p.style.color = "purple"
//             res()
//         }, 5000);
        
//     })
// }
// new Promise((res, rej) => {
//     func1()
//         .then(func2)
//         .then(func3)
//         .then(func4)

// })

// Promise()

async function f1(){
    console.log("log 1");
}

await function f2(){
    console.log("log 2");       
}
await function f3(){
    console.log("log 3");       
}
await function f4(){
    console.log("log 4");       
}
