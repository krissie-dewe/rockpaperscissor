const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('.result');


rock.addEventListener('click', () => {
    
    playRound(rock.textContent.toLowerCase());
});

paper.addEventListener('click', () => {
    
    playRound(paper.textContent.toLowerCase());
});

scissor.addEventListener('click', () => {
    
    playRound(scissor.textContent.toLowerCase());
});

function playRound(playerSelection) {

     const computerSelection = computerPlay();
     let resultText = 'Go!';
    
   if(playerSelection.toLowerCase() == 'rock') {
        if(computerSelection == 'rock') {
            resultText = `You Draw, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'paper')  {
            resultText = `You Loose, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'scissor') {
            resultText = `You WIN, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        }
    }else if(playerSelection.toLowerCase() == 'paper') {
        if(computerSelection == 'rock') {
            resultText = `You WIN, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'paper')  {
            resultText = `You Draw, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'scissor') {
            resultText = `You Loose, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        }
    } else if(playerSelection.toLowerCase() == 'scissor') {
        if(computerSelection == 'rock') {
            resultText = `You Loose, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'paper')  {
            resultText = `You WIN, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'scissor') {
            resultText = `You Draw, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        }
    } else {
        resultText = 'wrong input';
        console.log(resultText);
    }
    result.textContent = resultText;
}

function computerPlay() {
    const choice = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);

    return choice[random];
}
