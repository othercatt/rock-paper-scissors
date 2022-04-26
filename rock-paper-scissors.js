// GAME FUNCTIONS //

function computerPlay() {
  let selector = Math.floor(Math.random()*3);
  if (selector == 0) {
    computerSelection = 'Rock';
  } else if (selector == 1) {
    computerSelection = 'Paper';
  } else if (selector == 2) {
    computerSelection = 'Scissors';
  }
  return computerSelection;
};


function compareSelections(playerSelection, computerSelection) {
  if (playerSelection == 'Rock') {
    if (computerSelection == 'Rock') {
      outcome = 'Tie';
    } else if (computerSelection == 'Paper') {
      outcome = 'Lose';
    } else if (computerSelection == 'Scissors') {
      outcome = 'Win';
    }
  }
  else if (playerSelection == 'Paper') {
    if (computerSelection == 'Rock') {
      outcome = 'Win';
    } else if (computerSelection == 'Paper') {
      outcome = 'Tie';
    } else if (computerSelection == 'Scissors') {
      outcome = 'Lose';    
    }
  }
  else if (playerSelection == 'Scissors') {
    if (computerSelection == 'Rock') {
      outcome = 'Lose';
    } else if (computerSelection == 'Paper') {
      outcome = 'Win';
    } else if (computerSelection == 'Scissors') {
      outcome = 'Tie';
    }
  }
  return outcome;
};


function playRound(playerSelection, computerSelection) {
  let outcome = compareSelections(playerSelection, computerSelection);
  updateScore(playerSelection, computerSelection, outcome);

  if (playerWins == 5) {
    resultText.textContent = ("Congrats! You were the first to 5 points!");
    endGame();
  } else if (computerWins == 5) {
    resultText.textContent = ("Sorry, the computer reached 5 and wins this time!");
    endGame();
  }
  
  return outcome;
};


function updateScore(playerSelection, computerSelection, outcome) {
  let playerCounter = document.getElementById('player-counter');
  let computerCounter = document.getElementById('computer-counter');
  
  if (outcome == 'Win') {
    playerWins++;
    playerCounter.textContent = playerWins;
    resultText.textContent = ('You win! ' + playerSelection + ' beats ' + computerSelection + '.');
  } else if (outcome == 'Lose') {
    computerWins++;
    computerCounter.textContent = computerWins;
    resultText.textContent = ('Sorry, you lose! ' + computerSelection + ' beats ' + playerSelection + '.');  
  } else if (outcome == 'Tie') {
    resultText.textContent = ('This match was a tie.');
  };
}


function endGame() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;

  const newGameBtn = document.createElement('button');
  newGameBtn.id = 'new-game-button';
  newGameBtn.innerHTML = 'New Game';
  buttons.appendChild(newGameBtn);

  newGameBtn.addEventListener('click', () => {
    newGameBtn.remove();
    resetScoreboard();
    resetChoiceButtons();
  });
};


function resetScoreboard() {
  let playerCounter = document.getElementById('player-counter');
  playerWins = 0;
  playerCounter.textContent = playerWins;
  
  let computerCounter = document.getElementById('computer-counter');
  computerWins = 0;
  computerCounter.textContent = computerWins;

  let resultText = document.getElementById('match-result');
  resultText.textContent = 'Match results';
 };


function resetChoiceButtons() {
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
};




// GAME STATE

// State of the game upon starting
let playerWins = 0;
let computerWins = 0;
let buttons = document.getElementById('reset-box');
let resultText = document.getElementById('match-result');

// Player choice button event listeners - take choice and play one round
const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', () => {
  console.log('Clicked rock');
  let result = (playRound('Rock', computerPlay()));
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
  console.log('Clicked paper');
  let result = (playRound('Paper', computerPlay()));
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => {
  console.log('Clicked scissors');
  let result = (playRound('Scissors', computerPlay()));
});
