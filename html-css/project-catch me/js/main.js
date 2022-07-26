const $ = {
    mainDiv: document.querySelector("#main-div"),
    highScore: document.querySelector("#high-scores"),
    h1: document.querySelector("h1"),
    timer: document.querySelector("#timer"),
    clickMe: document.querySelector("#click-me"),
    missdClicks: document.querySelector("#missed-clicks"),
    pointsTNL: document.querySelector("#ptnl"),
    score: document.querySelector("#score"),
    level: document.querySelector("#level"),
    gUser : document.querySelectorAll("#user"),
}

$.h1.addEventListener("mouseover", toggleHeader)
$.h1.addEventListener("click", sayReady)
$.h1.addEventListener("mouseout", sayCatchMe)

function sayCatchMe() {
    $.h1.innerText = "CATCH ME IF YOU CAN!"
}

function toggleHeader() {
    !$.h1.innerText == "Click To Start" ?
        $.h1.innerText = "Click To Start" :
        $.h1.innerText = "CATCH ME IF YOU CAN!"
    if ($.h1.innerText = "Click To Start") {
        $.h1.addEventListener("click", sayReady)
    }
}

function sayReady() {
    if (confirm("ready to start?") == true) {
        start();
    }
}

function escape() {
   setInterval(() => {
        $.clickMe.style.top = parseInt(Math.random() * 550 + "px")
        $.clickMe.style.left = parseInt(Math.random() * 70 + "vw")
    }, 300)

}

function start() {
    $.h1.removeEventListener("click", sayReady)
    $.h1.removeEventListener("mouseover", toggleHeader)
    $.clickMe.addEventListener("click", addGoodClicks)
    timerGo();
    goRound();
    escape();
    addGoodClicks(e);
    addMissedClicks();
    // addScore();
    addLevel();
}
$.clickMe.addEventListener("mouseover", escape)

function timerGo() {
    if ($.level.innerHTML == 1) {
        $.timer.innerHTML = 60
    }
    if ($.level.innerHTML == 2) {
        $.timer.innerHTML = 70
    }
    if ($.level.innerHTML == 3) {
        $.timer.innerHTML = 80
    }
    if ($.level.innerHTML == 4) {
        $.timer.innerHTML = 90
    }
    if ($.level.innerHTML == 5) {
        $.timer.innerHTML = 100
    }
    var a = setInterval(() => {
        $.timer.innerHTML < 10 ? "0" + `${$.timer.innerText}` : `${$.timer.innerText}`;
        $.timer.innerHTML--
        
    }, 1000)
    if ($.timer.innerHTML <= 0) {
            gameOver()
        }
}

function gameOver() {
    alert("Game Over!Your score was: " + `${score.innerHTML}`);
    clearInterval(a);
    removeEventListener(clickMe)
    removeEventListener(mainDiv)
}

function goRound() {
    if ($.level.innerText == 1) { $.mainDiv.style.animation.duration = "2s" }
    if ($.level.innerText == 2) { $.mainDiv.style.animation.duration = "2.25s" }
    if ($.level.innerText == 3) { $.mainDiv.style.animation.duration = "2.5s" }
    if ($.level.innerText == 4) { $.mainDiv.style.animation.duration = "2.75s" }
    if ($.level.innerText == 5) { $.mainDiv.style.animation.duration = "3s" }

}

function addGoodClicks(e) {   
    e.stopPropagation();
    addScore()
    addLevel()
}

function addScore() {
    $.clickMe.addEventListener("click", addScore)
    if ($.level.innerText === 1) { $.score.innerText ++ }
    if ($.level.innerText === 2) { $.score.innerText + 2 }
    if ($.level.innerText === 3) { $.score.innerText + 3 }
    if ($.level.innerText === 4) { $.score.innerText + 4 }
    if ($.level.innerText === 5) { $.score.innerText + 5 }
}

function addLevel() {
    $.pointsTNL.innerHTML--
    if ($.pointsTNL.innerText == 0) {
        $.level.innerText++
        $.pointsTNL.innerHTML=10
        addScore()
        if ($.level.innerText >= 5 || $.timer.innerText == 0) {
            gameOver()
        }
    }
}


function addMissedClicks() {
    $.mainDiv.addEventListener("click", addMissedClicks)
    if ($.level.innerText === 1) {
        $.missdClicks.innerHTML ++
        $.score.innerText--
    }
    if ($.level.innerText === 2) {
        $.score.innerText - 2
    }
    if ($.level.innerText === 3) {
        $.score.innerText - 3
    }
    if ($.level.innerText === 4) {
        $.score.innerText - 4
    }
    if ($.level.innerText === 5) {
        $.score.innerText - 5
    }

}
  const gamers=[ {score:600,name:MeirSabbah},
    {score:538,name:RingoStar},
    {score:512,name:JohnLenon},
    {score:469,name:PaulMcCartney},
    {score:496,name:GeorgeHarrison},
]
  
$.gUser.addEventListener("mouseover",showTime)

function showTime(){
 var time=`${new Date(Date.now())}`
}
             
var leaderboard = [];
if(localStorage)
  {push.leaderboard(JSON.parse(localStorage.gUser))
}  
  else {
    push.gamers(JSON.parse(localStorage.gUser))
  }