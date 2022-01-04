"use strict";

// Bring HTML's elements
const tryBtn = document.querySelector(".js-btn");
const resetBtn = document.querySelector(".js-reset");

const userWins = document.querySelector(".js-user");
const computerWins = document.querySelector(".js-computer");

const selectValue = document.querySelector(".js-select");

const playerResult = document.querySelector(".js-playerResult");
const computerResult = document.querySelector(".js-computerResult");
const preResult = document.querySelector(".js-computerChoiceParragraph");

const result = document.querySelector(".js-result");

// FUNCTIONS:

// Generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// 1º- Generate computer choice: generate random movement
const computerChoiceImg = document.querySelector(".js-computerChoiceImg");
function randomMovement() {
  let computerChoice = getRandomNumber(9);
  if (computerChoice < 4) {
    computerChoice = "rock";
    // show the computer choice img
    // computerChoiceImg.innerHTML= `<img class="img" src= "../images/rock.png"/> `;
    //computerChoice.classList.toggle('rockImg');
    // computerChoice.classList.remove('paperImg');
    // computerChoice.classList.remove('scissorsImg');
  } else if (computerChoice >= 4 && computerChoice <= 6) {
    computerChoice = "paper";
    // computerChoiceImg.innerHTML= `<img class="img" src= "../images/paper.png"/> `;
    //  computerChoice.classList.add('paperImg');
    //  computerChoice.classList.remove('rockImg');
    // computerChoice.classList.remove('scissorsImg');
  } else {
    computerChoice = "scissors";
    //computerChoiceImg.innerHTML= `<img class="img" src= "../images/scissors.png"/> `;
    // computerChoice.classList.toggle('scissorsImg');
    // computerChoice.classList.remove('rockImg');
    // computerChoice.classList.remove('paperImg');
  }
  return computerChoice; // return to use it later
}

// Winning plays
const wins = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

// 2º-  guess
function handleClickTry(event) {
  event.preventDefault();

  // // 2º- Bring user attempt (taking the select value)
  const userAttempt = selectValue.value;
  const computerChoice = randomMovement();
  //stateHandleClickPlayBtn();
  // 4º Bring check result function, and introduce the user attempt and the computer choice as parameters
  checkResult(userAttempt, computerChoice);
  gameOver();
}

// 3º- Compare the result: 1 parameter for user attempt and 1 for the computer choice:
const userAttempt = selectValue.value;
const computerChoice = randomMovement();

let playerScore = 0;
let computerScore = 0;
let totalMoves = 0;

function checkResult(userAttempt, computerChoice) {
  // preResult.innerHTML = `Elección de la computadora: ${computerChoice} ->`;
  totalMoves++;

  if (userAttempt === computerChoice) {
    // empate
    result.innerHTML = `¡Empate!`;
  } else if (wins[userAttempt] === computerChoice) {
    // user wins
    result.innerHTML = `¡Enhorabuena! Has ganado`;
    playerScore++;
  } else {
    // user looses
    result.innerHTML = `Ups... Has perdido`;
    computerScore++;
  }

  // when comparation is over, show the result
  playerResult.innerHTML = playerScore;
  computerResult.innerHTML = computerScore;
}

// Not allowed to choose 'Seleccione su jugada' 
/*const stateHandleClickPlayBtn = () => {
    console.log(userAttempt);
  if (userAttempt === "choose") {
    tryBtn.disabled = true;
  } else {
    tryBtn.disabled = false;
  }
};
*/
function renderUserChoices() {
  const userChoiceImg = document.querySelector(".js-userChoiceImg");
 
  // if(userAttempt==='paper'){
  //     userChoiceImg.classList.add('rockImg');
  //     userChoiceImg.classList.remove('paperImg');
  //     userChoiceImg.classList.remove('scissorsImg');
  // }
}

// if attempts are equal to 10: game over
function gameOver() {
  if (totalMoves === 10) {
    toggleResetBtn();
    if (playerScore < computerScore) {
      result.innerHTML = "¡Ohh...Has perdido el juego!";
    } else if (playerScore > computerScore) {
      result.innerHTML = "¡Has ganado el juego!";
    } else {
      result.innerHTML = "¡Has empatado!";
    }
    playerScore = 0;
    computerScore = 0;
  }
}

// Function to reset the game
function rebootApplication(event) {
  event.preventDefault();
  toggleResetBtn();
  playerScore = 0;
  computerScore = 0;
  totalMoves = 0;

  playerResult.innerHTML = playerScore;
  computerResult.innerHTML = computerScore;
  result.innerHTML = `Nuevo juego`;
}

function toggleResetBtn() {
  tryBtn.classList.toggle("hidden");
  resetBtn.classList.toggle("hidden");
}

// Listeners
tryBtn.addEventListener("click", handleClickTry);
resetBtn.addEventListener("click", rebootApplication);
