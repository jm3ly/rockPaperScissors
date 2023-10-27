/*function to get a choice from the computer*/
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}


/*function to play a round of rock paper scissors*/
function playRound(playerSelection, computerSelection){
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

function game() {

}

/*my console logs*/     
const playerSelection = 'pAPEr';
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));