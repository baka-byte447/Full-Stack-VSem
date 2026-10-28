var counter=0;
setTimeout(()=>{
    counter+=1;
    console.log(counter+"timer stopped");
},1000);

var counter=0;
setInterval(()=>{
    counter+=1;
    console.log(counter+"Seconds have passed");
},1000);

