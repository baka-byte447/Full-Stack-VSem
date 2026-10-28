function checkArmstrong(num) {
    let ans = 0;
    let d = num.toString().length;
    //console.log(d);
    let cpy = num;
    while (cpy > 0) {
        ans += (cpy % 10) ** d;
        cpy = Number.parseInt(cpy / 10);
    }
    console.log(ans);
    if (ans === num) return true
    else false;
}
                            
function checkAndShow(){
    let val = document.getElementById("val").value;
    let para = document.createElement("p");
    if(checkArmstrong(val)) {
        para.textContent="Armstrong Number";
        document.getElementById("check").innerHTML="Checking......";}
    else {
        para.textContent="NOT Armstrong Number";
        document.getElementById("check").innerHTML="Checking......";
    }
    document.getElementsByTagName("body")[0].append(para);
}