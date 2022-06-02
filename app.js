//! ONCLICK DEGERLER
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

//! OUTPUT KISMI

const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");

rockBtn.addEventListener("click", () => {
  const rock = rockBtn.textContent;
  userChoice.textContent = rock;
  array = ["rock", "paper", "scissors"];
  let getComputerChoice = Math.floor(Math.random() * 3);
  computerChoice.textContent = array[getComputerChoice];
  resulty();
});
paperBtn.addEventListener("click", () => {
  const paper = paperBtn.textContent;
  userChoice.textContent = paper;
  array = ["rock", "paper", "scissors"];
  let getComputerChoice = Math.floor(Math.random() * 3);
  computerChoice.textContent = array[getComputerChoice];
  resulty();
});
scissorsBtn.addEventListener("click", () => {
  const scissors = scissorsBtn.textContent;
  userChoice.textContent = scissors;
  array = ["rock", "paper", "scissors"];
  let getComputerChoice = Math.floor(Math.random() * 3);
  computerChoice.textContent = array[getComputerChoice];

  resulty();
});
let result2;
function resulty() {
  if (userChoice === computerChoice) {
    result2 = "Draw";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    result2 = "You win";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    result2 = "You lost";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    result2 = "You lost";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result2 = "You won";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    result2 = "You won";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    result2 = "You lost";
  }
  console.log(result2);
  result.innerHTML = `${result2}`;
}
