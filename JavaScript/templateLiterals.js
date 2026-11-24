let a = "GLA University"; // new line is not allowed
let b =  `GLA 
University`; // here it is allowed


let o = "OKAY";
console.log(`gay is not ${o}`);


let myCode = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQkzK69QFR86fxY_OzSjS8B-JVgALX-WKIHkIkaVMBjwzz80IN2h1gsM&s'><h1>CODE</h1><p>WHAT THE HELLY</p>";

// BAD READABLITY

let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQkzK69QFR86fxY_OzSjS8B-JVgALX-WKIHkIkaVMBjwzz80IN2h1gsM&s";
let title = "CODE";
let desc = "DESCRIPTION"
let mynewCode = `
                    <img src = ${image}>
                    <h1>${title}<h1>
                    <p>${desc}</p>
                `

Document.getElementById("div").innerHTML = mynewCode;