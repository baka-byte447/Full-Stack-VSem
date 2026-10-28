
const draw = ["ROCK", "PAPER", "SCISSOR"];

let pw = 0;
let cw = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (pw >= 5 || cw >= 5) {
            return;
        }

        const player = event.currentTarget.className;
        const comp = draw[Math.floor(Math.random() * 3)];

        console.log(`Player: ${player}`);
        console.log(`Computer: ${comp}`);

        if (player === comp) {
            console.log("DRAW");
        } else if (
            (player === "ROCK" && comp === "SCISSOR") ||
            (player === "PAPER" && comp === "ROCK") ||
            (player === "SCISSOR" && comp === "PAPER")
        ) {
            pw++;
            console.log("PLAYER WON");
            console.log(`Player Points: ${pw}`);
        } else {
            cw++;
            console.log("COMPUTER WON");
            console.log(`Computer Points: ${cw}`);
        }

        if (pw === 5) {
            console.log("PLAYER WINS THE GAME!");
        } else if (cw === 5) {
            console.log("COMPUTER WINS THE GAME!");
        }
    });
});
