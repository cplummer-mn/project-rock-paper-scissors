

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

function getPlayerChoice() {
    return  prompt('Rock, Paper or Scissors?');
}

getComputerChoice(); 
console.log("done");

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    console.log('Player chose ' + playerSelection);
    console.log('Computer chose ' + computerSelection);

    if(playerSelection === computerSelection) {
        return 'Draw! ' + playerSelection + ' ties with ' + computerSelection;
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock'; 
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors'; 
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock'; 
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper'; 
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors'; 
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper'; 
    }
    else {
        return 'It looks like the Player input is blank or invalid';
    }
}


// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

function game() {

    let playerWins = 0;
    let computerWins = 0;

    // for(let i = 0; i < 5; i++) {
        while(computerWins < 5 && playerWins <5) {
        
        let playerSelection = getPlayerChoice();
        let result = playRound(playerSelection,getComputerChoice());
        console.log(result);
        if (result.charAt(0) ===  'D') {
            console.log('Neither player gains points! Player score: ' + playerWins + ' Computer score: ' + computerWins)
        }
        else if (result.charAt(4) === 'W') {
            playerWins++;
            console.log('Player gains one point! Player score: ' + playerWins + ' Computer score: ' + computerWins)
        }
        else if (result.charAt(0) === 'I') {
            console.log('Invalid Player choice, no points awarded');
        }
        else {
            computerWins++;
            console.log('Computer gains one point! Player score: ' + playerWins + ' Computer score: ' + computerWins)
        }
    }

    if(playerWins > computerWins) {
        console.log('Congrats! The player has won!');
    }
    else if (playerWins < computerWins) {
        console.log('The computer has won, better luck next time!');
    }
    else {
        console.log('Tie game! Try again!')
    }
}

game();