Here's a simple minimalist game called "Catch the Falling Objects." The objective is to catch falling circles by moving a paddle left and right. Below is the JavaScript code for the game logic:

```javascript
const gameContainer = document.getElementById('game-container');
const paddleWidth = 100;
const paddleHeight = 20;
const ballSize = 20;
let paddleX = (gameContainer.clientWidth - paddleWidth) / 2;
let ballX = Math.random() * (gameContainer.clientWidth - ballSize);
let ballY = 0;
let score = 0;
let gameOver = false;

gameContainer.style.position = 'relative';
gameContainer.style.width = '400px';
gameContainer.style.height = '600px';
gameContainer.style.backgroundColor = 'white';
gameContainer.style.overflow = 'hidden';

const paddle = document.createElement('div');
paddle.style.position = 'absolute';
paddle.style.width = paddleWidth + 'px';
paddle.style.height = paddleHeight + 'px';
paddle.style.backgroundColor = 'black';
gameContainer.appendChild(paddle);

const ball = document.createElement('div');
ball.style.position = 'absolute';
ball.style.width = ballSize + 'px';
ball.style.height = ballSize + 'px';
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'red';
gameContainer.appendChild(ball);

const scoreDisplay = document.createElement('div');
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style left = '10px';
scoreDisplay.style.fontSize = '20px';
scoreDisplay.innerHTML = 'Score: 0';
gameContainer.appendChild(scoreDisplay);

function updatePaddlePosition(e) {
    const containerRect = gameContainer.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    paddleX = Math.min(Math.max(mouseX - paddleWidth / 2, 0), gameContainer.clientWidth - paddleWidth);
    paddle.style.left = paddleX + 'px';
}

function dropBall() {
    ballX = Math.random() * (gameContainer.clientWidth - ballSize);
    ballY = 0;
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

function updateGame() {
    if (gameOver) return;

    if (ballY < gameContainer.clientHeight) {
        ballY += 5; // Ball falling speed
        ball.style.top = ballY + 'px';
    } else {
        // Check for catching the ball
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
            score++;
            scoreDisplay.innerHTML = 'Score: ' + score;
            dropBall(); // Reset ball position
        } else {
            gameOver = true;
            alert('Game Over! Your score: ' + score);
        }
    }

    requestAnimationFrame(updateGame);
}

gameContainer.addEventListener('mousemove', updatePaddlePosition);
dropBall();
updateGame();
```

### How to Use
1. Create an `index.html` file that includes the `<div id='game-container'></div>` as specified.
2. In the `index.html`, add a `<script>` tag at the end of the body to link this JavaScript code.

### Example `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimalist Catch Game</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
    </style>
</head>
<body>
    <div id='game-container'></div>
    <script>
        // Paste the provided JavaScript code here
    </script>
</body>
</html>
```

With this setup, you'll have a minimalistic game that renders on a webpage, where players can move a paddle to catch falling objects. Enjoy!