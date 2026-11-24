const grid = document.querySelector("#grid");
const message = document.querySelector("#message");

let fruits = [
    "🍎", "🍎", "🍌", "🍌",
    "🍇", "🍇", "🍊", "🍊",
    "🍓", "🍓", "🥝", "🥝",
    "🍉", "🍉", "🍒", "🍒"
]

fruits.sort(
    ()=> Math.random()-0.5
);

let 