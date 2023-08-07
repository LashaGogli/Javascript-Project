function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
        if (!["rock", "paper", "scissors"].includes(playerChoice)) {
            alert("Please enter either rock, paper, or scissors.");
        }
    } while (!["rock", "paper", "scissors"].includes(playerChoice));
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}

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

        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game! 🏆");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game! 😢");
    } else {
        console.log("The game ends in a tie!");
    }
}

game();

const newGame = prompt("Do you want to play again? (yes or no)").toLowerCase();
if (newGame === "yes") {
    location.reload();
} else {
    console.log("Thank you for playing!");
}
