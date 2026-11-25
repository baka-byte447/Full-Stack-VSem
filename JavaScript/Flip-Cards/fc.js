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

let first;
let second;

let opened = false;
let matches = 0;

fruits.forEach(
    (fruit)=>{
        const card = document.createElement("button");

        card.textContent = '?';
        card.dataset.fruit= fruit;

        card.addEventListener("click", ()=>{
            
        })
    }
)