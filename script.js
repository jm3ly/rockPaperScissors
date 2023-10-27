/*function to get a choice from the computer*/
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}


/*function to play a single round of rock paper scissors*/
/*function playRound(playerSelection, computerSelection){
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
}*/

/*function to play 5 games against the computer*/
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

for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        console.log('ERROR! Please enter a valid choice (rock, paper, or scissors)');
        continue; // Skip this game and move on to the next iteration of the loop
    }
    const computerSelection = getComputerChoice();

    console.log(`Game ${i}: Player chose ${playerSelection} and Computer chose ${computerSelection}`);
    console.log(playGame(playerSelection, computerSelection));
}


/*my console logs   
const playerSelection = 'paper';
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection)
console.log(playGame(playerSelection, computerSelection));*/