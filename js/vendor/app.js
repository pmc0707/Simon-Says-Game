let gameSeq = [];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level =0;

let p  = document.querySelector("p");

document.addEventListener("keypress", function() {
  if(started === false) {
    console.log("game started");
    started = true;

    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
   setTimeout(function (){
     btn.classList.remove("flash");
   },20);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
   setTimeout(function (){
     btn.classList.remove("userFlash");
   },20);
}

 function levelUp() {
  userSeq = [];
   level++;
    p.innerText =`level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
 }
 function checkAns(index) {
  // console.log("current Level", level);

   if(userSeq[index] === gameSeq[index]){
    if(userSeq.length === gameSeq.length) {
      setTimeout(levelUp,1000)
    }
   } else {
     p.innerHTML =`Game Over! Your score was <b>${level}</b>`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function () {
       document.querySelector("body").style.backgroundColor="white";
     },150);
     reset();
   }
 }

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}
function reset() {
  started =false;
  gameSeq = [];
  userSeq =[];
  level =0;

}
