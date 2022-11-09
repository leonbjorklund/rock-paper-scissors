const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerSelection() {
  return prompt("What is your decision?");
}

function playRound() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerSelection().toLowerCase();

  if (playerSelection === computerSelection) {
    return { text: "Draw!", didWin: null };
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return { text: "You Lose! Paper beats Rock", didWin: false };
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return { text: "You win! Rock beats Scissors", didWin: true };
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return { text: "You win! Paper beats Rock", didWin: true };
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return { text: "You lose! Paper beats Scissors", didWin: false };
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return { text: "You lose! Scissors beats Rock", didWin: false };
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return { text: "You win! Scissors beat Paper", didWin: true };
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let result = playRound();
    console.log(result.text);

    if (result.didWin !== null) {
      if (result.didWin) {
        playerScore++;
      } else {
        computerScore++;
      }
    }
    console.log("Score: " + playerScore + " - " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log(
      "Player won! Final score: " + playerScore + " - " + computerScore
    );
  } else if (playerScore < computerScore) {
    console.log("Player lost! Score: " + playerScore + " - " + computerScore);
  } else {
    console.log("It's a draw, score: " + playerScore + " - " + computerScore);
  }
}

playGame();
