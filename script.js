let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('userChoice').innerText =
    `Your choice: ${userChoice}`;
  document.getElementById('computerChoice').innerText =
    `Computer choice: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw 🤝";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win 🎉";
    userScore++;
  } else {
    result = "Computer Wins 💻";
    computerScore++;
  }

  document.getElementById('winner').innerText = result;
  document.getElementById('userScore').innerText = userScore;
  document.getElementById('computerScore').innerText = computerScore;
}
