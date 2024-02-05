
const selection = ["rock","paper","scissors"]

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScoreCard = document.querySelector("#playerScore");
const computerScoreCard = document.querySelector("#computerScore");
const playerChoiceCard = document.querySelector("#playerChoice");
const computerChoiceCard = document.querySelector("#computerChoice");
const main = document.querySelector("main");
/*              Overlay Element Creation        */
const overlay = document.createElement("div");
overlay.classList.add("overlay");
const overlayCard = document.createElement("div");
const overlayHeading = document.createElement("div");
const overlayHeading2 = document.createElement("div");
const overlayHeadText = document.createElement("h1");
const overlayHead2Text = document.createElement("h2");
const startBtn = document.createElement("button");
/*              Overlay Element Classes and Insertion        */
overlayCard.classList.add("overlay-card");
overlayHeading.classList.add("overlay-heading");
overlayHeading2.classList.add("overlay-heading2");
startBtn.classList.add("start-button");
overlayHeading.append(overlayHeadText);
overlayHeading2.append(overlayHead2Text);
overlayCard.append(overlayHeading, overlayHeading2, startBtn);
overlay.append(overlayCard);
document.body.appendChild(overlay);

const title = "ROCK, PAPER, SCISSORS GAME";
const subtitle = "Can you get five points first?";
/*            Show overlay to play game         */
document.addEventListener('DOMContentLoaded', () => {
toggleText(title,subtitle)});

/*                  Game play                   */
startBtn.addEventListener('click', start)

function start(){
    toggleOverlay();
    playerScore = 0;
    computerScore = 0;
}
/*             Show and hide overlay           */
function toggleOverlay(){
    overlay.classList.toggle('visible');
    main.classList.toggle('hidden');
}
/*            Overlay content creation         */
function toggleText(header = '', content = '', start = 'Play'){
    overlayHeadText.textContent = header;
    overlayHead2Text.textContent = content;
    startBtn.textContent = start;
    toggleOverlay();
}

let playerScore = 0;
let computerScore = 0;
/*           When player selects Rock         */
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
    };
    checkScore();
    if (finishGame == true){
        gameFinish();
    };

});
/*           When player selects Paper         */
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
    };
    checkScore();
    if (finishGame == true){
        gameFinish();
    };

});
/*           When player selects Scissors         */
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
    };
    checkScore();
    if (finishGame == true){
        gameFinish();
    };
});

/*    Function to get a random selection for computer.    */
function getComputerChoice() {
    const computerSelection = selection[Math.floor(Math.random()*selection.length)];
    return computerSelection;
}
/*    Function that checks if either player got to five points.   */
function checkScore(){
    if (playerScore === 5 || computerScore === 5) { 
        finishGame = true;
    } else {
        finishGame = false;
    };
    return finishGame;
};

/*  Function that plays one round of the game and returns string.  */
function playRound(playerSelection, computerSelection){
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
     };
};
/* Function to check if game has finished and toggles play again screen. */
function gameFinish(){
    let title = '';
    let subtitle = '';
    if (finishGame == true && playerScore > computerScore){
        title = "You won!";
        subtitle = "Do you want to play again?"
        gameReset();
        toggleText(title, subtitle, "Play Again")
    } else if (finishGame == true && playerScore < computerScore) {
        title = "You Lose :(";
        subtitle = "Do you want to play again?"
        gameReset();
        toggleText(title, subtitle, "Play Again")
    };
    
    
};
/* Function that resets the game and scores */
function gameReset(){
    computerScore = 0;
    playerScore = 0;
    playerScoreCard.textContent = `Your Score: ${playerScore}`;
    computerScoreCard.textContent = `Computer's Score: ${computerScore}`;
    finishGame = false;

};

// gameplay
