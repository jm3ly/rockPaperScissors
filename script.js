let userScore = 0
let computerScore = 0

/*Begin with a function that will randomly enter: Rock, Paper, or Scissors*/
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}


/*Same as previous function, changed name to 'playGame'*/
function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'This game is a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        userScore++;
        return 'User has won!';
    } else {
        computerScore++;
        return 'Computer has won the game';
    }
}


//event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rockBtn').addEventListener('click', function() {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
    });

    document.getElementById('paperBtn').addEventListener('click', function() {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
    });

    document.getElementById('scissorsBtn').addEventListener('click', function() {
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
    });
});


function displayResult(result) {
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.innerHTML = result;
};

function announceWinner() {
    const resultDisplay = document.getElementById('resultDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');

    if (userScore === 5) {
        resultDisplay.innerHTML = 'User is the overall winner!';
    } else {
        resultDisplay.innerHTML = 'Computer is the overall winner!';
    }

    // Disable buttons after the game is over
    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
}







/*Write a function that plays a single round of RPS. Has two parameters and
returns a single string to declare a winner*/
/*function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.tsoLowerCase();
    if (playerSelection === computerSelection) {
        return 'This game is a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'User has won!';
    } else {
        return 'Computer has won the game';
    }
}*/


/* Create a loop that allows the user to play 5 rounds against the computer
for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        console.log('ERROR! Please enter a valid choice (rock, paper, or scissors)');
        continue; // Skip this game and move on to the next iteration of the loop
    }
    const computerSelection = getComputerChoice();

    console.log(`Game ${i}: Player chose ${playerSelection} and Computer chose ${computerSelection}`);
    console.log(playGame(playerSelection, computerSelection));
}*/