let choiceArray = [
    'Rock',
    'Paper',
    'Scissors',
    'rock',
    'paper',
    'scissors'
];
let winnerArray = [
    'Player wins',
    'Computer wins',
    'No winner'
]
let winner;

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    let randomElement = choiceArray[randomIndex];
    return randomElement
}

function getPlayerChoice () {
    let playerChoice = prompt("Pick Rock, Paper or Scissors")
    return playerChoice
}

function playRound (playerSelection, computerSelection) {
    console.log("You selected " + playerSelection);
    console.log("Computer selected " + computerSelection)
    

    if((playerSelection == choiceArray[1] || playerSelection == choiceArray[4]) && (computerSelection == choiceArray[1] || computerSelection == choiceArray[4])){
        winner = winnerArray[2];
    } else if((playerSelection == choiceArray[2] || playerSelection == choiceArray[5]) && (computerSelection == choiceArray[1] || computerSelection == choiceArray[4])){
        winner = winnerArray[0];
    } else if((playerSelection == choiceArray[0] || playerSelection == choiceArray[3]) && (computerSelection == choiceArray[2] || computerSelection == choiceArray[5])){
        winner = winnerArray[0];
    } else if((playerSelection == choiceArray[1] || playerSelection == choiceArray[4]) && (computerSelection == choiceArray[0] || computerSelection == choiceArray[3])){
        winner = winnerArray[0];
    } else if((playerSelection == choiceArray[2] || playerSelection == choiceArray[5]) && (computerSelection == choiceArray[0] || computerSelection == choiceArray[3])){
        winner = winnerArray[1];
    } else if((playerSelection == choiceArray[0] || playerSelection == choiceArray[3]) && (computerSelection == choiceArray[1] || computerSelection == choiceArray[4])){
        winner = winnerArray[1];
    } else if((playerSelection == choiceArray[1] || playerSelection == choiceArray[4]) && (computerSelection == choiceArray[2] || computerSelection == choiceArray[5])){
        winner = winnerArray[1];
    } else if((playerSelection == choiceArray[2] || playerSelection == choiceArray[5]) && (computerSelection == choiceArray[2] || computerSelection == choiceArray[5])){
        winner = winnerArray[2];
    } else if((playerSelection == choiceArray[0] || playerSelection == choiceArray[3]) && (computerSelection == choiceArray[0] || computerSelection == choiceArray[3])){
        winner = winnerArray[2];
    }
    console.log(winner)
    return winner
}


function game(numRounds) {
    let playerCount = 0;
    let computerCount = 0;
    let drawCount = 0;
    

    for ( let i = 1; i <= numRounds; i++){
        playRound(getPlayerChoice(), getComputerChoice())
        if( winner == winnerArray[0]) {
            playerCount++;
        } else if (winner == winnerArray[1]){
            computerCount++;
        } else {
            drawCount++;
        }
    }
    let score = "Player: " + playerCount + " vs " + "Computer: " + computerCount + " and number of draws: " + drawCount;
    console.log(score)

    if(playerCount > computerCount) {
        console.log ('player wins')
    } else if (computerCount > playerCount) {
        console.log('computer wins')
    } else {
        console.log('no winner')
    }
}

game(3)