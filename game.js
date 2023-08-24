const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const scoreBoard = document.querySelector('#scoreBoard');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const drawScore = document.createElement('p');
const playerMove = document.createElement('p');
const computerMove = document.createElement('p');
const winner = document.createElement('p');
const choiceArray = [
    'Rock',
    'Paper',
    'Scissors'
];

let playerCount = 0;
let computerCount = 0;
let drawCount = 0;
let playerMoveTracker;
let computerMoveTracker;



scoreBoard.style.border = 'solid';
scoreBoard.style.backgroundColor = 'lightpink';

playerScore.classList.add('playerScore');
playerScore.textContent = 'Player score is: ' + playerCount;


scoreBoard.appendChild(playerScore);

computerScore.classList.add('computerScore');
computerScore.textContent = 'Computer score is: ' + computerCount;


scoreBoard.appendChild(computerScore);


drawScore.classList.add('drawScore');
drawScore.textContent = 'Number of draws: ' + drawCount;


scoreBoard.appendChild(drawScore);
scoreBoard.appendChild(computerMove);
scoreBoard.appendChild(playerMove);
scoreBoard.appendChild(winner);


// randomize computer choice for a more fair game
function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    let randomElement = choiceArray[randomIndex];
    return randomElement
}

// buttons to make player choice interactive

    rockBtn.addEventListener('click', function(e){
        playRound('Rock', getComputerChoice());
    });
    paperBtn.addEventListener('click', function(e){
        playRound('Paper', getComputerChoice());
    });
    scissorsBtn.addEventListener('click', function(e){
        playRound('Scissors', getComputerChoice());
    });


function playRound (playerSelection, computerSelection) {
  
    if ((playerCount + computerCount) !== 5 ) {
        playerMove.textContent = 'You selected ' + playerSelection;
        computerMove.textContent = 'Computer selected ' + computerSelection;
        if((playerSelection == choiceArray[1]) && (computerSelection == choiceArray[1])){
            drawCount++;
        } else if((playerSelection == choiceArray[2]) && (computerSelection == choiceArray[1])){
            playerCount++;
        } else if((playerSelection == choiceArray[0]) && (computerSelection == choiceArray[2])){
            playerCount++;
        } else if((playerSelection == choiceArray[1]) && (computerSelection == choiceArray[0])){
            playerCount++;
        } else if((playerSelection == choiceArray[2]) && (computerSelection == choiceArray[0])){
            computerCount++;
        } else if((playerSelection == choiceArray[0]) && (computerSelection == choiceArray[1])){
            computerCount++;
        } else if((playerSelection == choiceArray[1]) && (computerSelection == choiceArray[2])){
            computerCount++;
        } else if((playerSelection == choiceArray[2]) && (computerSelection == choiceArray[2])){
            drawCount++;
        } else if((playerSelection == choiceArray[0]) && (computerSelection == choiceArray[0])){
            drawCount++;
        }
    } else {
        if(playerCount > computerCount){
            winner.style.color = 'green';
            winner.textContent = 'winner is player';
        } else if (computerCount > playerCount) {
            winner.style.color = 'red';
            winner.textContent = 'winner is computer';
        };
    
    };

    // tracks the amount of time player and computer won for easier score keeping
    // playerMove.textContent = "You selected " + playerMoveTracker;
    // computerMove.textContent = "Computer selected " + computerMoveTracker;
    
    // writes the number of times each happened for a easier score keeping
    playerScore.textContent = 'Player score is: ' + playerCount;
    computerScore.textContent = 'Computer score is: ' + computerCount;
    drawScore.textContent = 'number of draws: ' + drawCount;

    return drawCount, playerCount, computerCount;
};

