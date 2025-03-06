
const container = document.getElementById('game-container');
container.innerHTML = '<p>Click the box to score points!</p>';
const box = document.createElement('div');
box.style.width = '50px';
box.style.height = '50px';
box.style.backgroundColor = 'red';
box.style.position = 'absolute';
box.style.top = '50%';
box.style.left = '50%';
box.style.transform = 'translate(-50%, -50%)';
container.appendChild(box);
let score = 0;
box.addEventListener('click', () => {
    score++;
    alert('Score: ' + score);
});
