const selection = ["rock","paper","scissors"]

function getComputerChoice() {
    const computerChoice = selection.[Math.floor(Math.random()*selection.length)];
    return computerChoice;
}