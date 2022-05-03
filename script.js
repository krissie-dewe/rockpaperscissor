const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('.result');
const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');


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
     let count = 0;
    
   if(playerSelection.toLowerCase() == 'rock') {
        if(computerSelection == 'rock') {
            resultText = `You Draw, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
            count = 2;
        } else if(computerSelection == 'paper')  {
            resultText = `You Loose, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
        } else if(computerSelection == 'scissor') {
            resultText = `You WIN, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
            count = 1;
        }
    }else if(playerSelection.toLowerCase() == 'paper') {
        if(computerSelection == 'rock') {
            resultText = `You WIN, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
            count = 1;
        } else if(computerSelection == 'paper')  {
            resultText = `You Draw, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
            count = 2;
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
            count = 1;
        } else if(computerSelection == 'scissor') {
            resultText = `You Draw, ${playerSelection} vs ${computerSelection}`;
            console.log(resultText);
            count = 2;
        }
    } else {
        resultText = 'wrong input';
        console.log(resultText);
    }
    result.textContent = resultText;

    if(count == 1) {
        let plScore = parseInt(player.textContent) + 1;

        player.textContent = plScore;


        if(parseInt(player.textContent) == 5) {
            result.textContent = "YOU WIN !!!";
            player.textContent = 0;
            computer.textContent = 0;
    
        }

    } else if(count == 0) {
        let compScore = parseInt(computer.textContent) + 1;
        computer.textContent = compScore;

        if(parseInt(computer.textContent) == 5) {
            result.textContent = "YOU LOOSE";
            player.textContent = 0;
            computer.textContent = 0;
    
        }
    }

}

function computerPlay() {
    const choice = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);

    return choice[random];
}
