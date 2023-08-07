function computerPlay() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
}

function playerPlay() {
    let playerChoice;
    do {
        playerChoice = prompt("Write either Rock, Paper, or Scissors and press OK, please!").toLowerCase();
        if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
            alert("Oh, comoon write either rock, paper or scissors please!!!");
        }
    } while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors");
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return "player";
    } else {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
        return "computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        const roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner === "player") {
            playerScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game! 🏆");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game! 😢 ");
    } else {
        console.log("The game ends in a tie!");
    }
}
game();
const newGame = prompt("Do you want a new game?");
if (newGame === "yes") {
    location.reload();
} else { close() }








