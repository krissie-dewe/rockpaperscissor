function playRound() {

    const playerSelection = prompt("Select 'rock', 'paper' or 'scissor' ");
    const computerSelection = computerPlay();
    let count = 0;
   
   if(playerSelection.toLowerCase() == 'rock') {
        if(computerSelection == 'rock') {
            console.log(`You Draw, ${playerSelection} vs ${computerSelection}`);
        } else if(computerSelection == 'paper')  {
            console.log(`You Loose, ${playerSelection} vs ${computerSelection}`);
        } else if(computerSelection == 'scissor') {
            console.log(`You Win, ${playerSelection} vs ${computerSelection}`);
            count = 1;
        }
    }else if(playerSelection.toLowerCase() == 'paper') {
        if(computerSelection == 'rock') {
            console.log(`You Win, ${playerSelection} vs ${computerSelection}`);
            count = 1;
        } else if(computerSelection == 'paper')  {
            console.log(`You Draw, ${playerSelection} vs ${computerSelection}`);
        } else if(computerSelection == 'scissor') {
            console.log(`You Loose, ${playerSelection} vs ${computerSelection}`);
        }
    } else if(playerSelection.toLowerCase() == 'scissor') {
        if(computerSelection == 'rock') {
            console.log(`You Loose, ${playerSelection} vs ${computerSelection}`);
        } else if(computerSelection == 'paper')  {
            console.log(`You Win, ${playerSelection} vs ${computerSelection}`);
            count = 1;
        } else if(computerSelection == 'scissor') {
            console.log(`You Draw, ${playerSelection} vs ${computerSelection}`);
        }
    } else {
        console.log('wrong input');
    }

    return count;
}

function computerPlay() {
    const choice = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);

    return choice[random];
}

function game() {
    let count = 0;
    for(let i=1; i<=5; i++) {
        count += playRound();
    }

    if(count >2) {
        console.log(`You Win : ${count} times`);
    }else {
        console.log('You Loose');
    }
    
}

game();