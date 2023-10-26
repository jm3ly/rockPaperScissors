/*function to get a choice from the computer*/
function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0: return 'rock'
        break;
        case 1: return 'paper'
        break;
        case 2: return 'scissors'
        break;
    };
};

function getPlayerChoice (userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput 
} else {console.log('ERROR!')}
}

/*function to play single round*/
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return 'This game is a tie!';
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'scissors') {
            return 'Computer has won! Rock beats Scissors';
        } else {
            return 'User has won! Paper beats Rock';
        }
    }
}


/*function to play the game*/
function game() {
    function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) {
            return 'This game is a tie!';
        } else if (computerSelection === 'rock') {
            if (playerSelection === 'scissors') {
                return 'Computer has won! Rock beats Scissors';
            } else {
                return 'User has won! Paper beats Rock';
            }
        } else if (computerSelection === 'paper') {
            if (playerSelection === 'rock') {
                return 'Computer has won! paper beats rock';
            } else {
                return 'User has won! scissors beats paper';
            }
        } else if (computerSelection === 'scissors') {
            if (playerSelection === 'paper') {
                return 'Computer has won! Scissors beats paper'
            } else {
                return 'User has won! rock beats scissors'
            }
        }
    }

}
   
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  /*console.log(playRound(playerSelection, computerSelection));*/
  console.log(game)