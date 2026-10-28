let number = Number.parseInt(Math.random()*100);


let count = 0;

while(count<=7){
    let g = document.getElementsByClassName("guess")[0];
    let guess = prompt("Enter Your Guess");

    

    if(guess==number){
    alert("Yay! You have guessed it right");
    break;
}

    else if(guess<number) alert("Too LOW!!");
    else alert("Too HIGH!!");

count++;
}