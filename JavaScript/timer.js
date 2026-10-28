// var time = 1;
// var seconds = time*60;

// setTimeout(
//     ()=>{
//         setInterval(()=>{
//             seconds-=1;
//             console.log(Math.floor(seconds/60)+" mins"+ seconds%60+" sec left");
//             },
//             1000
//         );

//     },

// )


let timer = setInterval(()=>{
    totalSecondsLeft -= 1;
    console.log(counter+" Seconds have passed");
    display();
    if(totalSecondsLeft==0){
        clearInterval(timer);
    }
},1000);

function display(){
    let seconds = totalSecondsLeft%60;
    let minutes = Number.parseInt(totalSecondsLeft/60);
}