var options = ['rock', 'paper', 'scissors'];
var results = {player: 0, computer: 0};

function computerPlay(){
    let computerChoice = Math.floor((Math.random() * 100) % 3)
    console.log('Computer: ' + options[computerChoice])
    return options[computerChoice];
}

function playRound(playerSelection, computerSelection){
    do{
        playerSelection = prompt("What do you choose: (Rock, Paper or Scissors)").toLowerCase();
    } while(options.indexOf(playerSelection) === -1)
    
    computerSelection = computerPlay();
    

    // console.log(`player: ${playerSelection}\ncomputer: ${computerSelection}`)

    if(playerSelection === 'rock'){
        switch(computerSelection){
            case 'rock':
                // win = 0;
                console.log('It\'s a tie');
                break;
            case 'paper':
                results.computer++;
                console.log('You lose! Paper beats rock!');
                break;
            case 'scissors':
                results.player++;
                console.log('You win! Rock beats scissors!');
                break;
        }
    } else if(playerSelection === 'paper'){
        switch(computerSelection){
            case 'rock':
                results.player++;
                console.log('You win! Paper beats rock!');
                break;
            case 'paper':
                // win = 0;
                console.log('It\'s a tie!');
                break;
            case 'scissors':
                results.computer++;
                console.log('You lose! Scissors beat paper!');
                break;
        }
    } else if(playerSelection === 'scissors'){
        switch(computerSelection){
            case 'rock':
                results.computer++;
                console.log('You lose! Rock beats scissors!');
                break;
            case 'paper':
                results.player++;
                console.log('You win! Scissors beat paper!');
                break;
            case 'scissors':
                // win = 0;
                console.log('It\'s a tie!');
                break;
        }
    }

    return results;
}

function game(){
    results.player = 0;
    results.computer = 0;
    
    while(true){
        playRound();
        if(results.computer === 5 || results.player === 5) break;
    }

    if(results.player > results.computer){
        return "You win!";
    } else if(results.player < results.computer){
        return "Computer wins!";
    } else{
        return "It's a tie!"
    }
}