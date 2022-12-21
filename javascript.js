function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if(num === 0) {
        return 'Rock';
    }
    else if(num === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors'
    }
    console.log()

}

const userScore = document.querySelector('#userScore');
const cpuScore =  document.querySelector('#cpuScore');
const info = document.querySelector('#info');
const computerChoiceUI = document.querySelector('#computerChoice');
const computerChoiceImage = document.querySelector('#computerChoiceImage');
const winLoseInfo = document.querySelector('#winLoseInfo');

const playAgain = document.querySelector('#playAgainContainer');
const infoDisplay = document.querySelector('.infoDisplay');

let cpuUnitScore = 0;
let userUnitScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        console.log(button.id);
        if(button.id == "btnPlayAgain") {
            playAgain.style.display = "none";
            cpuUnitScore = 0;
            userUnitScore = 0;
            cpuScore.textContent = 'CPU Score: ' + cpuUnitScore;
            userScore.textContent = 'Player Score: ' + userUnitScore;
        }
    })
});

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    console.log('Player chose ' + playerSelection);
    console.log('Computer chose ' + computerSelection);

    if(playerSelection === computerSelection) {
        info.textContent = 'It\'s a draw! ' + playerSelection + ' ties with ' + computerSelection;
        computerChoiceUI.textContent = computerSelection;
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerChoiceUI.textContent = 'Paper';
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
        info.textContent = 'You lose! Paper beats Rock'; 
        cpuUnitScore++;
        cpuScore.textContent = 'CPU Score: ' + cpuUnitScore;
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        computerChoiceUI.textContent = 'Scissors';
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
        info.textContent = 'You Win! Rock beats Scissors'; 
        userUnitScore++;
        userScore.textContent = 'Player Score: ' + userUnitScore;
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        computerChoiceUI.textContent = 'Rock';
        info.textContent =  'You Win! Paper beats Rock'; 
        userUnitScore++;
        userScore.textContent = 'Player Score: ' + userUnitScore;
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerChoiceUI.textContent = 'Scissors';
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
        info.textContent = 'You lose! Scissors beats Rock'; 
        cpuUnitScore++;
        cpuScore.textContent = 'CPU Score: ' + cpuUnitScore; 
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerChoiceUI.textContent = 'Rock';
        info.textContent = 'You lose! Rock beats Scissors'; 
        cpuUnitScore++;
        cpuScore.textContent = 'CPU Score: ' + cpuUnitScore; 
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        computerChoiceUI.textContent = 'Paper';
        computerChoiceImage.src = 'images/' + computerSelection + '.png';
        info.textContent =  'You Win! Scissors beats Paper'; 
        userUnitScore++;
        userScore.textContent = 'Player Score: ' + userUnitScore;
    }

    if(userUnitScore >= 5) {
        infoDisplay.textContent = 'You win! ' + userUnitScore + ' - ' + cpuUnitScore;
        playAgain.style.display = "flex";
    }
    else if(cpuUnitScore >= 5) {
        infoDisplay.textContent = 'You lose! ' + cpuUnitScore + ' - ' + userUnitScore;
        playAgain.style.display = "flex";
    }

}



        