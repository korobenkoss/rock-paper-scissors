var options = ['rock', 'paper', 'scissors'];
var results = {player: 0, computer: 0};
let display;
const displayInfo = document.querySelector('.display-info');
const reset = document.querySelector('#reset');

function computerPlay(){
    let computerChoice = Math.floor((Math.random() * 100) % 3)
    // console.log('Computer: ' + options[computerChoice])
    return options[computerChoice];
}

function updateScore(playerSelection, computerSelection){
    if(playerSelection === 'rock'){
        switch(computerSelection){
            case 'rock':
                // win = 0;
                display = 'It\'s a tie';
                break;
            case 'paper':
                results.computer++;
                display = 'You lose! Paper beats rock!';
                break;
            case 'scissors':
                results.player++;
                display = 'You win! Rock beats scissors!';
                break;
        }
    } else if(playerSelection === 'paper'){
        switch(computerSelection){
            case 'rock':
                results.player++;
                display = 'You win! Paper beats rock!';
                break;
            case 'paper':
                // win = 0;
                display = 'It\'s a tie!';
                break;
            case 'scissors':
                results.computer++;
                display = 'You lose! Scissors beat paper!';
                break;
        }
    } else if(playerSelection === 'scissors'){
        switch(computerSelection){
            case 'rock':
                results.computer++;
                display = 'You lose! Rock beats scissors!';
                break;
            case 'paper':
                results.player++;
                display = 'You win! Scissors beat paper!';
                break;
            case 'scissors':
                // win = 0;
                display = 'It\'s a tie!';
                break;
        }
    }

    displayInfo.textContent = display;
}

function checkWinner(){
    if(results.player === 5 || results.computer === 5){
        if(results.player > results.computer){
            display = "Finish: You win!";
        } else if(results.player < results.computer){
            display = "Finish: Computer wins!";
        } else{
            display = "Finish: It's a tie!";
        }
        document.querySelector('.reset-button').classList.remove('invisible');
        document.querySelector('.buttons').classList.add('invisible');
        displayInfo.textContent = display;
        
    }
}

function resetGame(){
    document.querySelector('.buttons').classList.remove('invisible');
    document.querySelector('.reset-button').classList.add('invisible');
    results.player = 0;
    results.computer = 0;
    display = 'Make your first move!';
    displayInfo.textContent = display;

}

resetGame();

const move = document.querySelectorAll('.player-selection');

move.forEach(m => {
    m.addEventListener('click', e => {
        let player = m.value;
        let computer = computerPlay();
        console.log('Player: ' + player);
        console.log('Computer: ' + computer);

        updateScore(player, computer);
        checkWinner();
    })
});

reset.addEventListener('click', (e) => resetGame())



