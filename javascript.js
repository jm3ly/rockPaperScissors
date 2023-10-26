/*function to get a choice from the computer*/
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}


function playGame (userChoice, computerChoice) {
    const userChoice = 'paper'
    if (userChoice === computerChoice) {
        return 'This game is a tie'
    }
    if (computerChoice === 'rock') {
        if (userChoice === 'paper') {
            return 'User has won!'
        } else {
            return 'Computer has won the game'
        }
    }
    if (computerChoice === 'paper') {
        if (userChoice === 'scissors') {
            return 'User has won!'
        } else {
            return 'Computer has won the game'
        }
    }
    if (computerChoice === 'scissors') {
        if (userChoice === 'rock') {
            return 'User has won!'
        } else {
            return 'Computer has won the game'
        }
    }
}
const computerChoice = getComputerChoice()
/*sconst userChoice = 'paper'*/

console.log(getComputerChoice())
/*console.log(userChoice)*/
console.log(playGame(userChoice, computerChoice))



/*function to get a choice from a user
function getPlayerChoice (userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput 
} else {console.log('ERROR! Type: rock, paper, or scissors!')}
}*/


/*function to determine the winner of the game*/
/*function determineWinner(playerSelection, computerSelection) {
    
        if (computerSelection === playerSelection) {
            return 'This game is a tie!';
        } else if (computerSelection === 'rock') {
            if (playerSelection === 'scissors') {
                return 'Computer has won!';
            } else {
                return 'User has won!';
            }
        } else if (computerSelection === 'paper') {
            if (playerSelection === 'rock') {
                return 'Computer has won!';
            } else {
                return 'User has won!';
            }
        } else if (computerSelection === 'scissors') {
            if (playerSelection === 'paper') {
                return 'Computer has won!';
            } else {
                return 'User has won!';
            }
        }
    }*/


  /*const playerSelection = getPlayerChoice('scissors');*/
  /*userInput = 'paper'
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice(userInput)
  console.log(getComputerChoice())
  console.log(getPlayerChoice(userInput))
  console.log(determineWinner(playerSelection, computerSelection))*/



