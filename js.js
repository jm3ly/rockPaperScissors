let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'This game is a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        userScore++;
        console.log('User Score:', userScore);
        return 'User has won!';
    } else {
        computerScore++;
        console.log('Computer Score:', computerScore);
        return 'Computer has won the game';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('rockBtn').addEventListener('click', function () {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        displayResult(playGame(playerSelection, computerSelection));
    });

    document.getElementById('paperBtn').addEventListener('click', function () {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        displayResult(playGame(playerSelection, computerSelection));
    });

    document.getElementById('scissorsBtn').addEventListener('click', function () {
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        displayResult(playGame(playerSelection, computerSelection));
    });
});

function displayResult(result) {
    const resultDisplay = document.getElementById('resultDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');

    resultDisplay.innerHTML = result;
    scoreDisplay.innerHTML = `User: ${userScore} | Computer: ${computerScore}`;

    if (userScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    const resultDisplay = document.getElementById('resultDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');

    if (userScore === 5) {
        resultDisplay.innerHTML = 'User is the overall winner!';
    } else {
        resultDisplay.innerHTML = 'Computer is the overall winner!';
    }

    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
}