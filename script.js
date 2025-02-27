const gameContainer = document.getElementById('game-container');
gameContainer.style.position = 'relative';
gameContainer.style.width = '400px';
gameContainer.style.height = '400px';
gameContainer.style.border = '2px solid black';
gameContainer.style.overflow = 'hidden';
gameContainer.style.backgroundColor = '#222';

let player = document.createElement('div');
player.style.position = 'absolute';
player.style.width = '40px';
player.style.height = '40px';
player.style.backgroundColor = '#ffcc00';
player.style.left = '180px';
player.style.bottom = '0px';
gameContainer.appendChild(player);

let score = 0;
let obstacles = [];
let gameInterval;

function startGame() {
    if (gameInterval) clearInterval(gameInterval);
    score = 0;
    obstacles = [];
    player.style.left = '180px';
    player.style.bottom = '0px';
    gameInterval = setInterval(gameLoop, 100);
    createObstacle();
}

function gameLoop() {
    moveObstacles();
    checkCollision();
}

function createObstacle() {
    let obstacle = document.createElement('div');
    obstacle.style.position = 'absolute';
    obstacle.style.width = '40px';
    obstacle.style.height = '40px';
    obstacle.style.backgroundColor = '#ff0000';
    obstacle.style.left = Math.random() * (gameContainer.clientWidth - 40) + 'px';
    obstacle.style.top = '0px';
    obstacles.push(obstacle);
    gameContainer.appendChild(obstacle);

    setTimeout(createObstacle, 2000);
}

function moveObstacles() {
    obstacles.forEach(obstacle => {
        let top = parseInt(obstacle.style.top);
        obstacle.style.top = (top + 5) + 'px';
        if (top > gameContainer.clientHeight) {
            obstacle.remove();
            score++;
        }
    });
    obstacles = obstacles.filter(obstacle => {
        return parseInt(obstacle.style.top) <= gameContainer.clientHeight;
    });
    if (score > 0) {
        document.title = 'Score: ' + score;
    }
}

function checkCollision() {
    obstacles.forEach(obstacle => {
        let playerRect = player.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();
        if (!(playerRect.right < obstacleRect.left ||
              playerRect.left > obstacleRect.right ||
              playerRect.bottom < obstacleRect.top ||
              playerRect.top > obstacleRect.bottom)) {
            alert('Game Over! Your score: ' + score);
            startGame();
        }
    });
}

document.addEventListener('keydown', function(event) {
    let left = parseInt(player.style.left);
    if (event.key === 'ArrowLeft' && left > 0) {
        player.style.left = (left - 15) + 'px';
    } else if (event.key === 'ArrowRight' && left < gameContainer.clientWidth - 40) {
        player.style.left = (left + 15) + 'px';
    }
});

startGame();
```
OpenAI Raw Response:
 ```javascript
const gameContainer = document.getElementById('game-container');
gameContainer.style.position = 'relative';
gameContainer.style.width = '400px';
gameContainer.style.height = '400px';
gameContainer.style.border = '2px solid black';
gameContainer.style.overflow = 'hidden';
gameContainer.style.backgroundColor = '#000';

let player;

function createPlayer() {
    player = document.createElement('div');
    player.style.width = '30px';
    player.style.height = '30px';
    player.style.position = 'absolute';
    player.style.backgroundColor = 'lime';
    player.style.left = '185px';
    player.style.bottom = '10px';
    gameContainer.appendChild(player);
}

let score = 0;
const scoreDisplay = document.createElement('div');
scoreDisplay.style.color = 'white';
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.innerHTML = 'Score: 0';
gameContainer.appendChild(scoreDisplay);

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.style.width = '30px';
    obstacle.style.height = '30px';
    obstacle.style.position = 'absolute';
    obstacle.style.backgroundColor = 'red';
    obstacle.style.left = Math.random() * 370 + 'px';
    obstacle.style.top = '0px';
    gameContainer.appendChild(obstacle);

    function moveObstacle() {
        const obstacleTop = parseInt(obstacle.style.top);
        if (obstacleTop < 400) {
            obstacle.style.top = obstacleTop + 4 + 'px';
            requestAnimationFrame(moveObstacle);
        } else {
            score++;
            scoreDisplay.innerHTML = 'Score: ' + score;
            gameContainer.removeChild(obstacle);
            createObstacle();
        }

        if (detectCollision(obstacle)) {
            alert('Game Over! Your score: ' + score);
            resetGame();
        }
    }
    moveObstacle();
}

function detectCollision(obstacle) {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    return !(
        playerRect.top > obstacleRect.bottom ||
        playerRect.bottom < obstacleRect.top ||
        playerRect.left > obstacleRect.right ||
        playerRect.right < obstacleRect.left
    );
}

function resetGame() {
    score = 0;
    scoreDisplay.innerHTML = 'Score: 0';
    while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.firstChild);
    }
    createPlayer();
    createObstacle();
}

function movePlayer(evt) {
    const playerLeft = parseInt(player.style.left);
    if (evt.key === 'ArrowLeft' && playerLeft > 0) {
        player.style.left = playerLeft - 15 + 'px';
    }
    if (evt.key === 'ArrowRight' && playerLeft < 370) {
        player.style.left = playerLeft + 15 + 'px';
    }
}

window.addEventListener('keydown', movePlayer);
createPlayer();
createObstacle();
