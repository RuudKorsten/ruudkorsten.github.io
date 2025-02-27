let score = 0;

document.getElementById("click-btn").addEventListener("click", function () {
    score++;
    document.getElementById("score").textContent = score;
});
