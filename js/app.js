/*
 * Create a list that holds all of your cards
 */
 //Infos à choper
const start_overlay=document.querySelector('#overlay');
const liste=document.querySelectorAll('.card');
const deck=document.querySelector('.deck');
const moves=document.querySelector('.moves');
let arr = [];
let selectedCard = [];
let openCard=[];
let openProp=[];



//Waiting for the first click
start_overlay.addEventListener('click', function(){
  startin();
  //Shuffle the array
  shuffle(arr);
  deckPuttin();
})

//On the game
deck.addEventListener('click', function(event){
  if (event.target.nodeName === 'DIV') {
    let image=event.target.children[0];
    console.log(image);
    image.classList.add("flip");
  let parentCard=event.target.parentNode;
  event.target.classList.add("frontflip");
  //visib=parentCard.children[1].children[0];
  //console.log(visib);
  //visib.style.visibility= "visible";
  console.log(parentCard);
  altCard=parentCard.children[0].alt;
  cardProp=parentCard.parentNode;
  openProp.push(cardProp);
  openCard.push(altCard);
  console.log(openCard);
        if (openCard.length !== 'undefined' && openCard.length > 1) {
            if (openCard[0]===openCard[1]) {
              console.log(cardProp);
              openProp[0].classList="card match cardwin";
              openProp[1].className="card match cardwin";
              openProp=[];
              openCard=[];
            }
            else {
              openProp[0].className="card front backflip";
              openProp[1].className="card front backflip";
              openProp=[];
              openCard=[];
            }
          }
          else {
            cardProp.className="card open";
          }
      }});

//FUNCTION STARTIN
function startin(){
  //Define the cards style
  const image=document.getElementsByTagName('img');
  let arrImage = Array.from(image);

  for (i=0;i<arrImage.length;i++){
    //arrImage[i].style.visibility="visible";
    //arrImage[i].className="hiddin";
    console.log(arrImage[i]);
  }
  //Movement counter
  moves.textContent='15';
  //Get every card into an array
  for (let i = 0, ref = arr.length = liste.length; i < ref; i++) {
   arr[i] = liste[i];
  }
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

//FUNCTION DECK PUTTING
function deckPuttin(){
  //Add cards on the HTML
  for (i=0; i<arr.length; i++) {
    let nouvelleCard=arr[i];
    deck.appendChild(nouvelleCard);
  }
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 // FUNCTION OVERLAY
 function on() {
     document.getElementById("overlay").style.display = "block";
 }
 function off() {
     document.getElementById("overlay").style.display = "none";
 }
