
const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

let score = 0;
let timeLeft = 30;
let moleInterval;
let timerInterval;

for (let i = 0; i < 9; i++) {
    const cell = document.createElement("button");

    cell.classList.add("cell");
    cell.textContent = "hole";

    grid.appendChild(cell);
}

startBtn.addEventListener("click", function () {
    clearInterval(moleInterval);
    clearInterval(timerInterval);

    score = 0;
    timeLeft = 30;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    message.textContent = "";

    startBtn.disabled = true;

    const cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell) {
        cell.textContent = "hole";
        cell.classList.remove("MOLE");
    });

    moleInterval = setInterval(function () {
        cells.forEach(function (cell) {
            cell.textContent = "hole";
            cell.classList.remove("MOLE");
        });

        const randomIndex = Math.floor(Math.random() * 9);

        cells[randomIndex].textContent = "MOLE";
        cells[randomIndex].classList.add("MOLE");
    }, 800);
    timerInterval = setInterval(function () {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(moleInterval);
            clearInterval(timerInterval);

            cells.forEach(function (cell) {
                cell.textContent = "hole";
                cell.classList.remove("MOLE");
            });

            message.textContent = "Game Over! Final Score: " + score;
            startBtn.disabled = false;
        }
    }, 1000);
});
grid.addEventListener("click", function (event) {
    if (event.target.classList.contains("MOLE")) {
        score++;
        scoreDisplay.textContent = score;

        event.target.textContent = "Empty";
        event.target.classList.remove("MOLE");
    }
});
