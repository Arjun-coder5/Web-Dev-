const rollBtn = document.getElementById("roll-button");
const resetBtn = document.getElementById("reset-button");
const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const winnerText = document.getElementById("winner-text");
const turnText = document.getElementById("turn-text");

const player1El = document.getElementById("player1");
const player2El = document.getElementById("player2");

const diceFaces = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

let score1 = 0;
let score2 = 0;
let currentPlayer = 1;
const targetScore = 20;

// Roll button
rollBtn.addEventListener("click", () => {
  const diceEl = currentPlayer === 1 ? dice1El : dice2El;
  diceEl.classList.add("roll-animation");

  setTimeout(() => {
    diceEl.classList.remove("roll-animation");

    const roll = Math.floor(Math.random() * 6);
    diceEl.innerHTML = diceFaces[roll];
    const points = roll + 1;

    if (currentPlayer === 1) {
      score1 += points;
      score1El.innerText = `Score: ${score1}`;
    } else {
      score2 += points;
      score2El.innerText = `Score: ${score2}`;
    }

    // Check winner
    if (score1 >= targetScore || score2 >= targetScore) {
      declareWinner(score1 >= targetScore ? "Player 1" : "Player 2");
      return;
    }

    // Switch turn
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    turnText.innerText = `Player ${currentPlayer}'s Turn`;
    player1El.classList.toggle("active", currentPlayer === 1);
    player2El.classList.toggle("active", currentPlayer === 2);
  }, 1000);
});

// Reset button
resetBtn.addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  currentPlayer = 1;
  dice1El.innerHTML = "&#9856;";
  dice2El.innerHTML = "&#9856;";
  score1El.innerText = "Score: 0";
  score2El.innerText = "Score: 0";
  winnerText.innerText = "";
  turnText.innerText = "Player 1's Turn";
  player1El.classList.add("active");
  player2El.classList.remove("active");
  stopConfetti();
});

// Winner
function declareWinner(player) {
  winnerText.innerText = `🏆 ${player} Wins the Game! 🏆`;
  rollBtn.disabled = true;
  startConfetti();
}

// 🎉 Confetti effect
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
let confettiPieces = [];

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function startConfetti() {
  confettiPieces = Array.from({ length: 200 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.5 + 0.5,
    color: `hsl(${Math.random() * 360},100%,50%)`,
    tilt: Math.random() * 10 - 10
  }));
  requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.d * 5;
    p.x += Math.sin(p.y / 20);
    if (p.y > confettiCanvas.height) p.y = -10;
  });
  if (confettiPieces.length) requestAnimationFrame(updateConfetti);
}

function stopConfetti() {
  confettiPieces = [];
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  rollBtn.disabled = false;
}
