// Function to get the user's choice and validate it
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); // Convert user input to lowercase
  // Check if userInput is one of the valid choices using the OR operator (||)
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput; // Return the valid user input
  } else {
    return 'Error! Invalid choice.'; // Return an error message if the choice is invalid
  }
};

// Function to get the computer's random choice
const getComputerChoice = () => {
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3); // Math.floor() and Math.random()
  // Determine the computer's choice based on the random number using a switch statement
  switch (randomNumber) {
    case 0:
      return 'rock'; // Return 'rock' if randomNumber is 0
    case 1:
      return 'paper'; // Return 'paper' if randomNumber is 1
    case 2:
      return 'scissors'; // Return 'scissors' if randomNumber is 2
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  // Check if userChoice is 'bomb' using the strict equality operator (===)
  if (userChoice === 'bomb') {
    return 'You win with the secret bomb!'; // Return a special win message
  }
  // Check for a tie using the strict equality operator (===)
  if (userChoice === computerChoice) {
    return 'It\'s a tie!'; // Return 'It's a tie!' if both choices are the same
  }
  // Determine the winner if the user choice is 'rock' using nested if statements
  if (userChoice === 'rock') {
    // Use ternary operator (?) to check if computerChoice is 'paper'
    return (computerChoice === 'paper') ? 'The computer won!' : 'You won!';
  }
  // Determine the winner if the user choice is 'paper' using nested if statements
  if (userChoice === 'paper') {
    // Use ternary operator (?) to check if computerChoice is 'scissors'
    return (computerChoice === 'scissors') ? 'The computer won!' : 'You won!';
  }
  // Determine the winner if the user choice is 'scissors' using nested if statements
  if (userChoice === 'scissors') {
    // Use ternary operator (?) to check if computerChoice is 'rock'
    return (computerChoice === 'rock') ? 'The computer won!' : 'You won!';
  }
};

// Function to play the game
const playGame = userChoice => {
  const userSelection = getUserChoice(userChoice); // Get the user choice
  // Check if the userSelection starts with 'Error' using .startsWith()
  if (userSelection.startsWith('Error')) {
    document.getElementById('result').textContent = userSelection; // Display error
    return; // Exit the function if there's an error
  }
  const computerChoice = getComputerChoice(); // Get computer choice
  const winner = determineWinner(userSelection, computerChoice); // Determine the winner
  // Update the result paragraph with the game's result
  document.getElementById('result').textContent = `You chose: ${userSelection}, Computer chose: ${computerChoice}. ${winner}`;
};
