let scores = [0, 0];
let turns = [5, 5];
let currentPlayer = 0;

const diceEl = document.getElementById("dice");
const statusEl = document.getElementById("status");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

const scoreEls = [document.getElementById("score1"), document.getElementById("score2")];
const turnEls = [document.getElementById("turns1"), document.getElementById("turns2")];
const playerEls = [document.getElementById("p1"), document.getElementById("p2")];

const diceSound = document.getElementById("diceSound");
const winSound = document.getElementById("winSound");

const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

// 🎉 Confetti setup
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
let confettiPieces = [];

function startConfetti() {
  confettiPieces = Array.from({ length: 200 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.5 + 0.5,
    color: `hsl(${Math.random() * 360},100%,50%)`,
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
}

// 🎲 Dice Roll
function rollDice() {
  if (turns[0] === 0 && turns[1] === 0) {
    declareWinner();
    return;
  }

  diceEl.classList.add("roll-animation");
  diceSound.play();

  setTimeout(() => {
    diceEl.classList.remove("roll-animation");

    const dice = Math.floor(Math.random() * 6) + 1;
    diceEl.innerText = diceFaces[dice - 1];

    scores[currentPlayer] += dice;
    scoreEls[currentPlayer].innerText = scores[currentPlayer];

    turns[currentPlayer]--;
    turnEls[currentPlayer].innerText = turns[currentPlayer];

    statusEl.innerText = `Player ${currentPlayer + 1} rolled ${dice}`;

    playerEls[0].classList.remove("active");
    playerEls[1].classList.remove("active");
    currentPlayer = currentPlayer === 0 ? 1 : 0;

    if (turns[currentPlayer] > 0) {
      playerEls[currentPlayer].classList.add("active");
      statusEl.innerText += ` → Now Player ${currentPlayer + 1}'s Turn`;
    }

    if (turns[0] === 0 && turns[1] === 0) {
      declareWinner();
    }
  }, 1000);
}

function declareWinner() {
  rollBtn.disabled = true;
  winSound.play();
  startConfetti();

  if (scores[0] > scores[1]) {
    statusEl.innerText = "🏆 Player 1 Wins!";
  } else if (scores[1] > scores[0]) {
    statusEl.innerText = "🏆 Player 2 Wins!";
  } else {
    statusEl.innerText = "🤝 It's a Draw!";
  }
}

function resetGame() {
  scores = [0, 0];
  turns = [5, 5];
  currentPlayer = 0;
  scoreEls[0].innerText = 0;
  scoreEls[1].innerText = 0;
  turnEls[0].innerText = 5;
  turnEls[1].innerText = 5;
  diceEl.innerText = "⚀";
  rollBtn.disabled = false;
  playerEls[0].classList.add("active");
  playerEls[1].classList.remove("active");
  statusEl.innerText = "Player 1's Turn";
  stopConfetti();
}

rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);
