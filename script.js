
const selection = ["rock","paper","scissors"]

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScoreCard = document.querySelector("#playerScore");
const computerScoreCard = document.querySelector("#computerScore");
const playerChoiceCard = document.querySelector("#playerChoice");
const computerChoiceCard = document.querySelector("#computerChoice");

const overlay = document.createElement("div");
overlay.classList.add("overlay");
const overlayCard = document.createElement("div");
const overlayHeading = document.createElement("div");
const overlayHeading2 = document.createElement("div");
const overlayHeadText = document.createElement("h1");
const overlayHead2Text = document.createElement("h2");
const startBtn = document.createElement("button");


let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerChoiceCard.textContent = "Your Choice: ROCK";
    computerChoiceCard.textContent = `Computer's Choice: ${computerSelection.toUpperCase()}`;
    result.textContent = playRound("rock", computerSelection);
    if (computerSelection === "scissors") {
        playerScore += 1;
        playerScoreCard.textContent = `Your Score: ${playerScore}`;
    } else if (computerSelection === "paper"){
        computerScore += 1;
        computerScoreCard.textContent = `Computer's Score: ${computerScore}`;
    }
});

paperBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerChoiceCard.textContent = "Your Choice: PAPER";
    computerChoiceCard.textContent = `Computer's Choice: ${computerSelection.toUpperCase()}`;
    result.textContent = playRound("paper", computerSelection);
    if (computerSelection === "rock") {
        playerScore += 1;
        playerScoreCard.textContent = `Your Score: ${playerScore}`;
    } else if (computerSelection === "scissors"){
        computerScore += 1;
        computerScoreCard.textContent = `Computer's Score: ${computerScore}`;
    }
});

scissorsBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerChoiceCard.textContent = "Your Choice: SCISSORS";
    computerChoiceCard.textContent = `Computer's Choice: ${computerSelection.toUpperCase()}`;
    result.textContent = playRound("scissors", computerSelection);
    if (computerSelection === "paper") {
        playerScore += 1;
        playerScoreCard.textContent = `Your Score: ${playerScore}`;
    } else if (computerSelection === "rock"){
        computerScore += 1;
        computerScoreCard.textContent = `Computer's Score: ${computerScore}`;
    }
});

// function to get a random selection for computer
function getComputerChoice() {
    const computerSelection = selection[Math.floor(Math.random()*selection.length)];
    return computerSelection;
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
};

function checkScore(playerScore, computerScore){
    if (playerScore === 5 || computerScore === 5) { 
        if (playerScore > computerScore) {

        } else {

        };
    } else {

    };
};

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
