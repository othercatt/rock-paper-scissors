// GAME FUNCTIONS //

function computerPlay() {
  let selector = Math.floor(Math.random()*3);
  if (selector == 0) {
    computerSelection = 'Wand';
  } else if (selector == 1) {
    computerSelection = 'Bow';
  } else if (selector == 2) {
    computerSelection = 'Sword';
  }
  return computerSelection;
};


function compareSelections(playerSelection, computerSelection) {
  if (playerSelection == 'Wand') {
    if (computerSelection == 'Wand') {
      outcome = 'Tie';
    } else if (computerSelection == 'Bow') {
      outcome = 'Lose';
    } else if (computerSelection == 'Sword') {
      outcome = 'Win';
    }
  }
  else if (playerSelection == 'Bow') {
    if (computerSelection == 'Wand') {
      outcome = 'Win';
    } else if (computerSelection == 'Bow') {
      outcome = 'Tie';
    } else if (computerSelection == 'Sword') {
      outcome = 'Lose';    
    }
  }
  else if (playerSelection == 'Sword') {
    if (computerSelection == 'Wand') {
      outcome = 'Lose';
    } else if (computerSelection == 'Bow') {
      outcome = 'Win';
    } else if (computerSelection == 'Sword') {
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
  document.getElementById('wand').disabled = true;
  document.getElementById('bow').disabled = true;
  document.getElementById('sword').disabled = true;

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
  document.getElementById('wand').disabled = false;
  document.getElementById('bow').disabled = false;
  document.getElementById('sword').disabled = false;
};




// GAME STATE

// State of the game upon starting
let playerWins = 0;
let computerWins = 0;
let buttons = document.getElementById('reset-box');
let resultText = document.getElementById('match-result');

// Player choice button event listeners - take choice and play one round
const rockBtn = document.getElementById('wand');
rockBtn.addEventListener('click', () => {
  console.log('Clicked wand');
  let result = (playRound('Wand', computerPlay()));
});
// rockBtn.addEventListener("mouseover", bowOver, false);
// rockBtn.addEventListener("mouseout", bowOut, false);


const paperBtn = document.getElementById('bow');
paperBtn.addEventListener('click', () => {
  console.log('Clicked bow');
  let result = (playRound('Bow', computerPlay()));
});

const scissorsBtn = document.getElementById('sword');
scissorsBtn.addEventListener('click', () => {
  console.log('Clicked sword');
  let result = (playRound('Sword', computerPlay()));
});
