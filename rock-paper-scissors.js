function computerPlay() {
  // Randomly select for computer  
  let selector = Math.floor(Math.random()*3); // returns 0, 1, or 2
  if (selector == 0) {
    computerSelection = 'Rock';
  } else if (selector == 1) {
    computerSelection = 'Paper';
  } else if (selector == 2) {
    computerSelection = 'Scissors';
  }
  console.log('Computer: ' + computerSelection); // remove when finished
  return(computerSelection);
};



function playerSelection() {
  // prompt user for a choice
  let playerChoice = prompt("Please choose Rock, Paper, or Scissors");

  // format user input to be capitalized
  let formattedPlayerChoice = (playerChoice.charAt(0).toUpperCase() + 
    playerChoice.slice(1).toLowerCase());

  // if incorrect format, prompt user again
  if (formattedPlayerChoice == 'Rock' || 
    formattedPlayerChoice == 'Paper' || 
    formattedPlayerChoice == 'Scissors') {
    console.log('Player: ' + formattedPlayerChoice);
    return(formattedPlayerChoice);
  } else {
    return(playerSelection());
  }
};



function playRound(playerSelection, computerSelection) {
  // Compare user input to computer input
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

  // Display message showing results of match
  if (outcome == 'Win') {
    alert('You win! ' + playerSelection + ' beats ' + computerSelection + '.');
  } else if (outcome == 'Lose') {
    alert('Sorry, you lose! ' + computerSelection + ' beats ' + playerSelection + '.');  
  } else if (outcome == 'Tie') {
    alert('This match was a tie.');
  }

  // Return the outcome value for later use
  return(outcome);
};



function game() {
  // Start counters for the number of wins
  let playerWins = 0;
  let computerWins = 0;
  
  // Start a counter for the number of games played
  for (let rounds = 0; rounds < 5; rounds++) {
    
    // Play a round
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    playRound(playerChoice, computerChoice);    
    
    // Update player wins counter
    if (outcome == 'Win') {
      playerWins++;
      console.log(playerWins); // delete when working
    } else if (outcome == 'Lose') {
      computerWins++;
      console.log(computerWins); // delete when working
    }
  }

  // Report results of five-round match
  if (playerWins > computerWins) {
    console.log("You win the set!");
  } else if (playerWins < computerWins) {
    console.log("Sorry, you lose this set!");
  } else if (playerWins == computerWins) {
    console.log("This set of matches was a tie.");
  }
};



game();