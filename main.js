"use strict";

//Function for computer play(random selection)
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//Getting user input
function getPlayerChoice() {
  let playerChoice;

  //making input insensitive for upper/lowercases
  do {
    playerChoice = prompt(
      "Hey! This is a fun game on Rock 🤜, Paper 🫲 and Scissors ✌️.Let's begin!!! 🏁🏁🏁 Write EITHER Rock, Paper, or Scissors and press 🆗 please! You need to do this 5 times! GOOD LUCK!"
    ).toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
      alert("Uups! This is not one of 'rock', 'paper', or 'scissors'🧨");
    }
  } while (!["rock", "paper", "scissors"].includes(playerChoice));
  return playerChoice;
}

//Ruling the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! 🤝";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win 📣! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lost 📣! ${computerSelection} beats ${playerSelection}. Caamon! You can do it better!!!`;
  }
}

//Function for score counting
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = computerPlay();

    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("win")) {
      playerScore++;
    } else if (roundResult.includes("lost")) {
      computerScore++;
    }

    console.log(
      `Player Score : ${playerScore} | Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game! 🏆🥇🎉");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game! 🧨🧨 But it was a nice try!");
  } else {
    console.log("The game ends in a tie! 🤝");
  }
}

game();

//Start a new game
const newGame = prompt(
  "Do you want to play again? (yes or no)🏁🤜🫲✌️"
).toLowerCase();
if (newGame === "yes") {
  location.reload();
} else {
  console.log("Thank you for playing!");
}
