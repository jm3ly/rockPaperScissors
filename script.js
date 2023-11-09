


/*Begin with a function that will randomly enter: Rock, Paper, or Scissors*/
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
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
        return 'User has won!';
    } else {
        return 'Computer has won the game';
    }
}
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


/*CONSOLE LOGS*/   
/*const playerSelection = 'paper';
const computerSelection =s getComputerChoice();s
console.log(playerSelection);
console.log(computerSelection)
console.log(playGame(playerSelection, computerSelection));*/

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