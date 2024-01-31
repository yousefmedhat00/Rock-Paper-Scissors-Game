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
        return "It's a tie";
     } else if(computerSelection === "rock" && playerSelection === "scissors") {
        alert("You lose! Rock beats Scissors");
        computerScore++;
        return "You lose! Rock beats Scissors";
     } else if(computerSelection === "rock" && playerSelection === "paper"){
        alert("You win! Paper beats Rock");
        playerScore++
        return "You win! Paper beats Rock";
     } else if(computerSelection === "scissors" && playerSelection === "paper"){
        alert("You lose! Scissors beat Paper");
        computerScore++;
        return "You lose! Scissors beat Paper";
     } else if(computerSelection === "scissors" && playerSelection === "rock"){
        alert("You win! Rock beats Scissors");
        playerScore++;
        return "You win! Rock beats Scissors";
     } else if(computerSelection === "paper" && playerSelection === "rock"){
        alert("You lose! Paper beats Rock");
        computerScore++;
        return "You lose! Paper beats Rock";
     } else {
        alert("You win! Scissors bears Paper");
        playerScore++;
        return "You win! Scissors bears Paper";
     }
}
function playGame(){
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore < computerScore){
        alert(`You Lose :(  Your score: ${playerScore}`);
        let result = `You Lose! :( Your score: ${playerScore}`;
    } else {
        alert(`You Win! :)  Your score: ${playerScore}`);
        let result = `You win! :)  Your score: ${playerScore}`;
    }
    return result;
}

playGame();
console.log(playGame());