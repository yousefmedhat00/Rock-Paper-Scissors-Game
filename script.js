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
     } else if(computerSelection === "rock" && playerSelection === "scissors") {
        alert("You lose! Rock beats Scissors");
        computerScore++;
     } else if(computerSelection === "rock" && playerSelection === "paper"){
        alert("You win! Paper beats Rock");
        playerScore++
     } else if(computerSelection === "scissors" && playerSelection === "paper"){
        alert("You lose! Scissors beat Paper");
        computerScore++;
     } else if(computerSelection === "scissors" && playerSelection === "rock"){
        alert("You win! Rock beats Scissors");
        playerScore++;
     } else if(computerSelection === "paper" && playerSelection === "rock"){
        alert("You lose! Paper beats Rock");
        computerScore++;
     } else {
        alert("You win! Scissors bears Paper");
        playerScore++;
     }
}

function playGame(){
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    alert(`Your score: ${playerScore}`);
}

playGame();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));