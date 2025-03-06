const container = document.getElementById('game-container');
const width = 400;
const height = 400;

// Create game elements
const player = {
    x: width / 2,
    y: height - 40,
    width: 30,
    height: 30,
    color: 'blue',
    speed: 5
};

const enemies = [];
const enemyCount = 5;
const enemyWidth = 30;
const enemyHeight = 30;

for (let i = 0; i  {
    if (e.key === 'ArrowLeft') {
        player.x -= player.speed;
        if (player.x  width) player.x = width - player.width;
    }
};

// Collision detection
const checkCollision = (rect1, rect2) => {
    return (
        rect1.x  rect2.x &&
        rect1.y  rect2.y
    );
};

// Game loop
const gameLoop = () => {
    // Clear previous frame
    container.innerHTML = '';

    // Draw player
    const playerElement = document.createElement('div');
    playerElement.style.width = player.width + 'px';
    playerElement.style.height = player.height + 'px';
    playerElement.style.backgroundColor = player.color;
    playerElement.style.position = 'absolute';
    playerElement.style.left = player.x + 'px';
    playerElement.style.top = player.y + 'px';
    container.appendChild(playerElement);

    // Draw enemies
    enemies.forEach((enemy, index) => {
        const enemyElement = document.createElement('div');
        enemyElement.style.width = enemy.width + 'px';
        enemyElement.style.height = enemy.height + 'px';
        enemyElement.style.backgroundColor = enemy.color;
        enemyElement.style.position = 'absolute';
        enemyElement.style.left = enemy.x + 'px';
        enemyElement.style.top = enemy.y + 'px';
        container.appendChild(enemyElement);

        // Check for collision
        if (checkCollision(player, enemy)) {
            score++;
            console.log('Score: ' + score);
            // Move enemy to a new random position
            enemy.x = Math.random() * (width - enemy.width);
            enemy.y = Math.random() * (height / 2);
        }
    });

    requestAnimationFrame(gameLoop);
};

// Start the game
gameLoop();
 

This JavaScript code creates a simple cartoonish game where the player (a blue box) can move left and right to collide with enemies (red boxes). When a collision occurs, the score increases, and the enemy is repositioned to a random spot within the game's upper half. The game runs in an endless loop, continuously rendering the player and enemies in a div with the ID `game-container`.