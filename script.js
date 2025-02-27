```javascript
const container = document.getElementById('game-container');
container.style.position = 'relative';
container.style.width = '400px';
container.style.height = '400px';
container.style.border = '2px solid black';
container.style.overflow = 'hidden';
container.style.backgroundColor = '#f0f0f0';

let score = 0;
let targetSize = 40;
let target;
let gameInterval;

function createTarget() {
    target = document.createElement('div');
    target.style.position = 'absolute';
    target.style.width = targetSize + 'px';
    target.style.height = targetSize + 'px';
    target.style.backgroundColor = 'red';
    target.style.borderRadius = '50%';
    target.style.cursor = 'pointer';
    target.style.top = Math.random() * (container.clientHeight - targetSize) + 'px';
    target.style.left = Math.random() * (container.clientWidth - targetSize) + 'px';
    container.appendChild(target);

    target.addEventListener('click', function() {
        score++;
        targetSize = Math.max(20, targetSize - 2);
        container.removeChild(target);
        createTarget();
        updateScore();
    });
}

function updateScore() {
    const scoreDisplay = document.getElementById('score-display') || document.createElement('div');
    scoreDisplay.id = 'score-display';
    scoreDisplay.innerText = 'Score: ' + score;
    scoreDisplay.style.position = 'absolute';
    scoreDisplay.style.top = '10px';
    scoreDisplay.style.left = '10px';
    scoreDisplay.style.fontSize = '20px';
    scoreDisplay.style.color = 'black';
    if (!document.getElementById('score-display')) {
        container.appendChild(scoreDisplay);
    }
}

function startGame() {
    score = 0;
    targetSize = 40;
    container.innerHTML = '';
    gameInterval = setInterval(createTarget, 1000);
    createTarget();
}

function stopGame() {
    clearInterval(gameInterval);
    alert('Game over! Your score: ' + score);
}

startGame();

setTimeout(stopGame, 15000);
```