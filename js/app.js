
 //Initialize variables

//overlay page
const start_overlay=document.querySelector('#overlay');
//liste of cards
const liste=document.querySelectorAll('.card');
//deck of cards
const deck=document.querySelector('.deck');
//number of movements
const moves=document.querySelector('.moves');
//number of stars
const stars=document.querySelectorAll(".stars");
//reset button
const restart = document.querySelector(".reset");
//timer
const counter = document.querySelector(".timer");
//result div
const result = document.querySelector("#results");
//play again button
const reload=document.querySelector("#reload");
//msg for time
const message_time = document.querySelector("#message_time");
//msg for number of moves
const message_move = document.querySelector("#message_move");
//msg for number of stars
const message_star = document.querySelector("#message_star");
//msg for result of the party
const message_resu = document.querySelector("#message_resu");

//array of cards
let arr=[];
//div of the card selected
let divCard=[];
//array of selected cards
let openCard=[];
//alt attribute of the cards
let openAlt=[];
//number of moves
let move=0;
//number of pairs of cards found
let cardNumber=0;
//time of playing
let time=0;
//seconds of playing
let seconds=0;
//minutes of playing
let minutes=0;
//number of stars at the beginning
let star=5;

// FUNCTION OVERLAY
function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}

//OVERLAY EVENT
start_overlay.addEventListener('click', function(){
  starting();
})

//FUNCTION STARTING
function starting(){
  //Take the liste of cards
  for (let i = 0; i < liste.length; i++) {
   arr[i] = liste[i];
  };
  //Suffle the cards
  //console.log(arr);
  shuffle(arr);
  //Add cards on the HTML
  for (let ar of arr) {
    deck.appendChild(ar);
  }
  //Movement counter
  moves.textContent='0';
  //Number of cards found
  cardNumber=0;
  //Number of movements
  move=0;
  //Set the time
  time=setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		counter.innerHTML = minutes+":"+seconds;
	}, 1000);
}

// FUNCTION SHUFFLE from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//restart the game
restart.addEventListener('click', reset);
//play again
reload.addEventListener('click', reset);

//FUNCTION RESET
function reset(){
  //hide the result part
  result.classList=("hide");
  //stop the time
  clearInterval(time);
  seconds=0;
  minutes=0;
  counter.innerHTML = minutes+":"+seconds;
  //console.log(openCard);
  //reinitialize the card position
  for (i=0;i<liste.length;i++){
    liste[i].children[1].classList=('back');
    //console.log(liste[i].children[1]);
  }
  //reset the number of stars
  for (i=0; i<5;i++){
    const newStar=document.createElement("li");
    stars[i].firstElementChild.classList.add("fa-star");
    console.log("yoyo");
  }
  on();
}

//CARD EVENT
deck.addEventListener('click', function(event){
  //select only one card
  if (event.target.nodeName === 'DIV') {
  moving();
  //select the target
  divCard=event.target;
  flip();
}
})

//MOVING FUNCTION
function moving(){
  //end the game if all moves are done
  if (move===40){
    stars[0].firstElementChild.classList.remove("fa-star");
    loseGame();
  }
  else {
    //update the movements
    move=move+1;
    moves.textContent=move;
    //console.log("tu as fait "+move+" coup(s)");
    //take off stars for numbers of move
    if (move===1){
      stars[4].firstElementChild.classList.remove("fa-star");
      star-=1;
    }
    if (move===2){
      stars[3].firstElementChild.classList.remove("fa-star");
      star-=1;
    }
    if (move===3){
      stars[2].firstElementChild.classList.remove("fa-star");
      star-=1;
    }
    if (move===4){
      stars[1].firstElementChild.classList.remove("fa-star");
      star-=1;
    }
  }
}

//FUNCTION LOSEGAME
function loseGame(){
  //display some bad messages :(
    message_resu.textContent="You lose!";
    message_time.textContent="You lose "+minutes+" minutes and "+seconds+" seconds of your life, congratulations!";
    message_move.textContent="You also had to click "+move+" times with your mouse.";
    message_star.textContent="You have "+star+" stars remaining but no worries, you can start again!";
    //reveal the result part
    result.classList=("show");
    //hide the other part
    document.body.style.overflow = 'hidden';
}

//FUNCTION FLIP
function flip(){
  //add flip class to the selected card
  divCard.classList.add("flip");
  // get the alt attribute
  altCard=divCard.children[0].alt;
  //console.log(altCard);
  goToOpen();
}

//FUNCTION GOTOOPEN
function goToOpen(){
  // put the card in an array
  openCard.push(divCard);
  //console.log(openCard.length);
  // put the alt attribute in an array
  openAlt.push(altCard);
  //when two cards are selected
  if (openCard.length===2){
  comparaison();
  }
}

//FUNCTION COMPARAISON
function comparaison(){
  //avoid clicks
  document.body.style.pointerEvents = "none";
  // if user selected 2 cards
  if (openAlt.length !== 'undefined' && openAlt.length > 1) {
      // if they have the same alt attribute
      if (openAlt[0]===openAlt[1]) {
        match();
      }
      else { //if different
        dismatch();
      }
    }
}

//FUNCTION MATCH
function match(){
  //console.log("Ca match ");
  //update the class of the cards
  openCard[0].classList.add("card", "match");
  openCard[1].classList.add("card", "match");
  // clear array
  openCard=[];
  openAlt=[];
  cardNumber+=1;
  //console.log("You already pick "+cardNumber+" cards!");
  //if all cards are found
  if (cardNumber === 8){
    winGame();
  }
  //put back the click option
  document.body.style.pointerEvents = "auto";
}

//FUNCTION WINGAME
function winGame(){
  //take time to appreciate the victory
  setTimeout(function(){
  //display some good messages ! :)
    message_resu.textContent="You won!";
    message_time.textContent="You lose "+minutes+" minutes and "+seconds+" seconds of your life, congratulations!";
    message_move.textContent="You also had to click "+move+" times with your mouse.";
    message_star.textContent="But no worries, you also won "+star+" beautiful stars!";
    //reveal the result part
    result.classList=("show");
    //hide the other part
    document.body.style.overflow = 'hidden';
  }, 1500);
}

//FUNCTION DISMATCH
function dismatch(){
  setTimeout(function(){
  //console.log("Ca match pas ");
  // go back to the initial position
  openCard[0].classList=("card");
  openCard[1].classList=("card");
  // clear array
  openCard=[];
  openAlt=[];
  //put back the click option
  document.body.style.pointerEvents = "auto";
}, 1000);
}
