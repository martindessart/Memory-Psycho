/*
 * Create a list that holds all of your cards
 */
 //Infos à choper
const startButton=document.querySelector('#begin');
const items=document.getElementsByClassName('card');
const liste=document.querySelectorAll('.card');
const contenu=document.querySelector('.container');
const deck=document.querySelector('.deck');

//lorsqu'on clique sur le boutton de départ
startButton.addEventListener('click', function(){
    //console.log(items);
    //Pour chacun on les remet à zéro
    for (i=0; i<items.length;i++){
      items[i].style.background='black';
      items[i].style.fontSize= '33px';
    }
    //Compteur de mouvements
    const moves=document.querySelector('.moves');
    moves.textContent='15';

    //On crée un array, on convertit la liste de card et on la shuffle
    //array=[1,2,3,4,5]
    var arr = [];
    for (var i = 0, ref = arr.length = liste.length; i < ref; i++) {
     arr[i] = liste[i];
    }
    shuffle(arr);
    console.log(arr);

    //Incorporer nouvelles cartes dans HTML
    for (i=0; i<arr.length; i++) {
      let nouvelleCard=arr[i];
      console.log(nouvelleCard);
      deck.appendChild(nouvelleCard);
    }
    //On supprime le deck ou les cartes une part une
    /*for (i=0; i<liste.length;i++){
      items[i].remove();
    }
    //On crée les nouvelles cartes
    const newCard=document.createElement('li');
    newCard.className='card';
    deck.appendChild(newCard);*/

    //essai de modifier cartes
    for (i=0; i<arr.length ;i++){
      const carte=arr[i];
      carte.addEventListener('click', function(){
        carte.style.background='red';
        carte.style.fontSize= '20px';
        var selectedCard = [];
        var openCard=selectedCard.push(carte);
        console.log('this is the final countdown');
        console.log(openCard);
      });
    }


})


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*const cardOne=document.querySelectorAll('.card');
//cardOne.addEventListener('click', function(){
cardOne.addEventListener('click', function(){
  cardOne.style.background='red';
  cardOne.style.fontSize= '20px';
})
*/


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
