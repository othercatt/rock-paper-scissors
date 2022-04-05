
function computerPlay() {
  let selector = Math.floor(Math.random()*3); // returns 0, 1, or 2
  if (selector == 0) {
    computerSelection = 'Rock';
  } else if (selector == 1) {
    computerSelection = 'Paper';
  } else if (selector == 2) {
    computerSelection = 'Scissors';
  }
  console.log('Computer: ' + computerSelection); // remove when finished
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
  // Compare choices and determine outcome
  let outcome = compareSelections(playerSelection, computerSelection);

  // Update the scoreboard
  updateScore(playerSelection, computerSelection, outcome);

  // Check if either score has reach 5 - if so, announce winner and end
  if (playerWins == 5) {
    resultText.textContent = ("Congrats! You were the first to 5 points!");
    endGame();
  } else if (computerWins == 5) {
    resultText.textContent = ("Sorry, the computer reached 5 and wins this time!");
    endGame();
  }
  // Return the outcome value for later use
  return outcome;
};


function updateScore(playerSelection, computerSelection, outcome) {
  // Increase counter by 1 and update scoreboard
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
  // Disable player selection buttons
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;

  // Create a button to reset counters and start a new game
  const newGameBtn = document.createElement('button');
  newGameBtn.id = 'new-game-button';
  newGameBtn.innerHTML = 'New Game';
  document.selection-buttons.appendChild(newGameBtn);

  newGameBtn.addEventListener('click', () => {
    newGameBtn.remove();
    resetScoreboard();
    startNewGame();
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


function startNewGame() {
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
  
  console.log('New game button clicked');
};




// State of the game upon starting
let playerWins = 0;
let computerWins = 0;
let buttons = document.getElementById('selection-buttons');
let resultText = document.getElementById('match-result');

// Processes to run during a five-point match
const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', () => {
  console.log('Clicked rock');
  let result = (playRound('Rock', computerPlay()));
  console.log(result);
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
  console.log('Clicked paper');
  let result = (playRound('Paper', computerPlay()));
  console.log(result);
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => {
  console.log('Clicked scissors');
  let result = (playRound('Scissors', computerPlay()));
  console.log(result);
});
