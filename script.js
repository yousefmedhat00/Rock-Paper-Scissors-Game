const selection = ["rock","paper","scissors"]
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const computerSelection = selection[Math.floor(Math.random()*selection.length)];
    return computerSelection;
}

function getPlayerSelection() {
    const playerSelection = prompt("Rock, Paper of Scissors?").toLowerCase();
    return playerSelection;
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        alert("It's a tie");
     } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
        alert('Computer wins.')


     } 
    }

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playerSelection)