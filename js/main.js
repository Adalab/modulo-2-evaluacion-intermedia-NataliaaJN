'use strict';

// Bring HTML's elements
const tryBtn= document.querySelector('.js-btn');
const result= document.querySelector('.js-result');

const userWins= document.querySelector('.js-user');
const computerWins= document.querySelector('.js-computer');

const playerResult= document.querySelector('.js-playerResult');
const computerResult= document.querySelector('.js-computerResult');

const resetBtn= document.querySelector('.js-reset');

// FUNCTIONS:

// Generate random number
function getRandomNumber(max){
    return Math.ceil(Math.random() * max);
  }


// Generate random movement
function randomMovement(){
    let computerChoice= getRandomNumber(9);
    if(computerChoice<4){
        computerChoice= 'rock';
    }
    else if(computerChoice>= 4 &&  computerChoice <=6){
        computerChoice= 'paper';
    }
    else{
        computerChoice= 'scissors';
    }
    return computerChoice;
}

  // Bring user guess
function handleClickTry(event){
    event.preventDefault();
    const selectValue= document.querySelector('.js-select');
    const userAttempt= selectValue.value;
    const computerChoice= randomMovement();
    checkResult(userAttempt, computerChoice);
}

const wins = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

function rebootApplication(event) {
    event.preventDefault();
    toggleResetBtn();
    playerResult.innerHTML = "0";
    computerResult.innerHTML = "0";
    result.innerHTML = `Nuevo juego`;
}

function toggleResetBtn(){
    tryBtn.classList.toggle('hidden');
    resetBtn.classList.toggle('hidden');
}

function addOneToQuerySelectorNumber(querySelector) {
    const newValue = parseInt(querySelector.innerHTML) + 1;
    querySelector.innerHTML= newValue;
    if (newValue === 10) {
        toggleResetBtn();

    } 

}


function checkResult(userAttempt, computerChoice){
    const preResult = `Elección de la computadora: ${computerChoice} ->`;
    console.log(userAttempt);
    if(userAttempt === computerChoice ){
        result.innerHTML= `${preResult} Empate`;
        addOneToQuerySelectorNumber(playerResult);
        addOneToQuerySelectorNumber(computerResult);
    }
    else if(wins[userAttempt] === computerChoice) {
        result.innerHTML= `${preResult} ¡Enhorabuena! Has ganado`;
        addOneToQuerySelectorNumber(playerResult);
    } else {
        result.innerHTML= `${preResult} Ups... Has perdido`;
        addOneToQuerySelectorNumber(computerResult);
    }
    
}

// Listeners
tryBtn.addEventListener('click', handleClickTry);
resetBtn.addEventListener('click', rebootApplication);