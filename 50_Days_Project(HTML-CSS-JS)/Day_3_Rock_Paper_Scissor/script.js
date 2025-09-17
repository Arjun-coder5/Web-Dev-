const userHealthEl = document.getElementById("user-health");
const computerHealthEl = document.getElementById("computer-health");
const resultEl = document.getElementById("result");
const countdownEl = document.getElementById("countdown");
const resetBtn = document.getElementById("reset-btn");
const choices = document.querySelectorAll(".choice-btn");

let userHealth = 5;
let computerHealth = 5;

const winMsgs = ["🔥 OP Move!", "🎉 Legend!", "😎 Too Good!"];
const loseMsgs = ["😢 Computer ne hara diya!", "🤖 LOL, better luck!", "💀 RIP!"];
const drawMsgs = ["🤝 Match Draw!", "😅 Same Move!", "⚡ Equal Powers!"];

// 🎵 Sound Effects
const tickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const winSound = new Audio("https://www.fesliyanstudios.com/play-mp3/6709");
const loseSound = new Audio("https://www.fesliyanstudios.com/play-mp3/6725");
const drawSound = new Audio("https://www.fesliyanstudios.com/play-mp3/6765");
const gameOverSound = new Audio("https://www.fesliyanstudios.com/play-mp3/6416");

function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}

function startCountdown(userChoice) {
  let count = ["Rock...", "Paper...", "Scissor...", "SHOOT!"];
  let i = 0;

  countdownEl.textContent = "";
  resultEl.textContent = "";

  let interval = setInterval(() => {
    countdownEl.textContent = count[i];
    tickSound.play(); // 🔊 tick sound for suspense
    i++;
    if (i === count.length) {
      clearInterval(interval);
      playRound(userChoice);
    }
  }, 600);
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    resultEl.textContent = drawMsgs[Math.floor(Math.random() * drawMsgs.length)];
    drawSound.play(); // 🔊 draw sound
    return;
  }

  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    computerHealth--;
    computerHealthEl.value = computerHealth;
    resultEl.textContent = winMsgs[Math.floor(Math.random() * winMsgs.length)];
    winSound.play(); // 🔊 win sound
  } else {
    userHealth--;
    userHealthEl.value = userHealth;
    resultEl.textContent = loseMsgs[Math.floor(Math.random() * loseMsgs.length)];
    loseSound.play(); // 🔊 lose sound
  }

  checkWinner();
}

function checkWinner() {
  if (userHealth === 0) {
    resultEl.textContent = "💀 Game Over! Computer Wins!";
    gameOverSound.play(); // 🔊 game over
    disableButtons();
  } else if (computerHealth === 0) {
    resultEl.textContent = "🏆 You are the Champion!";
    winSound.play(); // 🔊 big win
    disableButtons();
  }
}

function disableButtons() {
  choices.forEach(btn => btn.disabled = true);
}

function enableButtons() {
  choices.forEach(btn => btn.disabled = false);
}

// Reset Game
resetBtn.addEventListener("click", () => {
  userHealth = 5;
  computerHealth = 5;
  userHealthEl.value = userHealth;
  computerHealthEl.value = computerHealth;
  resultEl.textContent = "Game Reset! Start Playing 🎮";
  countdownEl.textContent = "";
  enableButtons();
});

// Button click events
choices.forEach(button => {
  button.addEventListener("click", () => {
    startCountdown(button.id);
  });
});
