let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let timeLeft = 30;
let gameRunning = false;

const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const timerDisplay = document.getElementById("timer");
const clickButton = document.getElementById("click-btn");
const restartButton = document.getElementById("restart-btn");
const message = document.getElementById("message");

highScoreDisplay.textContent = highScore;

clickButton.addEventListener("click", () => {
    if (!gameRunning) return;
    score++;
    scoreDisplay.textContent = score;
    clickButton.style.transform = "scale(1.1)";
    setTimeout(() => clickButton.style.transform = "scale(1)", 100);
});

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    message.textContent = "";
    restartButton.classList.add("hidden");
    gameRunning = true;

    let countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame();
        } else {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }
    }, 1000);
}

function endGame() {
    gameRunning = false;
    message.textContent = "Game Over! Your final score: " + score;
    
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        highScoreDisplay.textContent = highScore;
        message.textContent += " 🎉 New High Score!";
    }
    
    restartButton.classList.remove("hidden");
}

restartButton.addEventListener("click", startGame);

startGame(); // Start the game automatically
