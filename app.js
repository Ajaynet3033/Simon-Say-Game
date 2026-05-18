let gameSep = [];
let userSep = [];

let btns = ["red", "purple", "green", "yellow"];

let started = false;
let level = 0;
 
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");        
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 500 );
}   

function levelUp() {
    userSep = [];
    level++;
    h2.innerText = `Level ${level}`; 

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSep.push(randColor);
    console.log(gameSep);
    gameFlash(randBtn);
}


function checkAns(idx) {
    if(userSep[idx] === gameSep[idx]) {
        if(userSep.length == gameSep.length) {
            setTimeout(levelUp, 1000);
        }           
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press Any Key to Restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }       
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSep.push(userColor);
    
    checkAns(userSep.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}       

function reset() {  
    started = false;
    gameSep = [];
    userSep = [];
    level = 0;
}   