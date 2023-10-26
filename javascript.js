/*function to get a choice from the computer*/
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}


/*function to get a choice from a user*/
function getPlayerChoice (userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput 
} else {console.log('ERROR! Type: rock, paper, or scissors!')}
}


/*function to determine the winner of the game*/
function determineWinner(playerSelection, computerSelection) {
    
        if (computerSelection === playerSelection) {
            return 'This game is a tie!';
        } else if (computerSelection === 'rock') {
            if (playerSelection === 'scissors') {
                return 'Computer has won! Rock beats Scissors';
            } else {
                return 'User has won! Scissors beats Paper';
            }
        } else if (computerSelection === 'paper') {
            if (playerSelection === 'rock') {
                return 'Computer has won! Paper beats Rock';
            } else {
                return 'User has won! Rock beats Scissors';
            }
        } else if (computerSelection === 'scissors') {
            if (playerSelection === 'paper') {
                return 'Computer has won! Scissors beats Paper';
            } else {
                return 'User has won! Paper beats Rock';
            }
        }
    }


  /*const playerSelection = getPlayerChoice('scissors');*/
  userInput = 'paper'
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice(userInput)
  /*console.log(playRound(playerSelection, computerSelection));*/
  console.log(getComputerChoice())
  console.log(getPlayerChoice(userInput))
  console.log(determineWinner(playerSelection, computerSelection))








  /*function to play single round
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
}*/