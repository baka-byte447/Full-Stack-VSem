const startButton = document.querySelector("#start");
const reactButton = document.querySelector("#react");
const message = document.querySelector("#message");
const result = document.querySelector("#result");
const body = document.getElementsByTagName("body");

let startTime;

startButton.addEventListener("click", () => {
    result.textContent = "";
    message.textContent = "Wait for green...";

    startButton.disabled = true;
    reactButton.disabled = true;

    const delay = Math.random() * 3000 + 2000;

    setTimeout(() => {
        message.textContent = "GO! Click now!";
        startTime = Date.now();

        reactButton.disabled = false;
        body.style.backgroundColor = "#000";
    }, delay);
});

reactButton.addEventListener("click", () => {
    const reactionTime = Date.now() - startTime;

    result.textContent = `Your reaction time: ${reactionTime} ms`;

    message.textContent = "Game over! Try again.";
    reactButton.disabled = true;
    startButton.disabled = false;
});