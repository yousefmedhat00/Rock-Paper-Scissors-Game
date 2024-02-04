
const selection = ["rock","paper","scissors"]

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScoreCard = document.querySelector("#playerScore");
const computerScoreCard = document.querySelector("#computerScore");


let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    result.textContent = playRound("rock", computerSelection);
    if (computerSelection === "scissors") {
        playerScore += 1;
        playerScoreCard.textContent = `Your Score: ${playerScore}`;
    }
}
)

// function to get a random selection for computer
function getComputerChoice() {
    const computerSelection = selection[Math.floor(Math.random()*selection.length)];
    return computerSelection;
}
// function to get selection from user, converted to lower-case for case insensitivity 
function getPlayerSelection() {
    const playerSelection = prompt("Rock, Paper of Scissors?").toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    // play one round of game
    if (playerSelection === computerSelection){
        return "It's a tie";
     } else if(computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats Scissors";
     } else if(computerSelection === "rock" && playerSelection === "paper"){
        return "You win! Paper beats Rock";
     } else if(computerSelection === "scissors" && playerSelection === "paper"){
        return "You lose! Scissors beat Paper";
     } else if(computerSelection === "scissors" && playerSelection === "rock"){
        return "You win! Rock beats Scissors";
     } else if(computerSelection === "paper" && playerSelection === "rock"){
        return "You lose! Paper beats Rock";
     } else {
        return "You win! Scissors bears Paper";
     }
}
function playGame(){
    // keep score
    let computerScore = 0;
    let playerScore = 0;
    // loop for a five round game
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log(playerScore);
    console.log(computerScore);
    // shows the final winner
    if (playerScore < computerScore){
        alert(`You Lose :(  Your score: ${playerScore}`);
        let result = `You Lose! :( Your score: ${playerScore}`;
    } else {
        alert(`You Win! :)  Your score: ${playerScore}`);
        let result = `You win! :)  Your score: ${playerScore}`;
    }
    return result;
}

// gameplay
