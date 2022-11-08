
let options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() { 
    return options[Math.floor(Math.random()*options.length)];
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("What is your choice?");

function playRound() {
    if (playerSelection === computerSelection) {
        return "Draw!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Paper beats Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Scissors beats Rock";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat Paper";
    }
}

console.log(playRound());







