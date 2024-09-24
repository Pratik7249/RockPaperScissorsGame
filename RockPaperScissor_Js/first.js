let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  if (lastUserChoice) {
    if (lastUserChoice === "rock") {
      return Math.random() < 0.5 ? "paper" : "scissor";
    } else if (lastUserChoice === "paper") {
      return Math.random() < 0.5 ? "scissor" : "rock";
    } else if (lastUserChoice === "scissor") {
      return Math.random() < 0.4 ? "rock" : "paper";
    }
  }
  return options[Math.floor(Math.random() * 3)];
};

let lastUserChoice = "";

const drawGame = () => {
  msg.innerText = "Game was a Draw. Play again.";
  msg.style.color = "#ffffff";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.color = "#ffffff";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.color = "#ffffff";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  lastUserChoice = userChoice;
  const compChoice = genCompChoice();
  
  if (userChoice === compChoice) {
    drawGame();
  } else {
    const userWin = (userChoice === "rock" && compChoice === "scissor") ||
                    (userChoice === "paper" && compChoice === "rock") ||
                    (userChoice === "scissor" && compChoice === "paper");
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const resetButton = document.createElement("button");
resetButton.innerText = "Reset Game";
document.body.appendChild(resetButton);
resetButton.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Game reset! Choose your move.";
  msg.style.backgroundColor = "#081b31";
});
