const http = require("http")
const PORT = 3434;
const fs = require("fs")
const path = require("path");
const viewPath = path.join(__dirname + "/./view")

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    // console.log("url", url)

    switch (url) {
        case "/":
            const homePage = fs.readFileSync(viewPath + "/home/home.html")
            res.end(homePage)
            break;
        case "/btn":
            res.end('hi from server click-here button')
            break;
        case "/home.css":
            const homeCssPage = fs.readFileSync(viewPath + "/home/home.css")
            res.end(homeCssPage)
            break;
        case "/home.js":
            const homeJSPage = fs.readFileSync(viewPath + "/home/home.js")
            res.end(homeJSPage)
            break;
        case "/login":
            const loginPage = fs.readFileSync(viewPath + "/login/login.html")
            res.end(loginPage)
            break;
        case "/login.css":
            const loginCssPage = fs.readFileSync(viewPath + "/login/login.css")
            res.end(loginCssPage)
            break;
        case "/login.js":
            const loginJSPage = fs.readFileSync(viewPath + "/login/login.js")
            res.end(loginJSPage)
            break;
        case "/404.css":
            const cssNotFoundPage = fs.readFileSync(viewPath + "/404/404.css")
            res.end(cssNotFoundPage)
            break;
        default:
            const notFoundPage = fs.readFileSync(viewPath + "/404/404.html")
            res.end(notFoundPage)
            break;

    }


})
//localhost:3434
server.listen(PORT);
console.log("server is listening on port:3434")

