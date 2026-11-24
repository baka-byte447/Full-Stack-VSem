function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    inner();
}

outer();


function manageCounter() {
    let count = 0;

    function inc() {
        count++;
        console.log(count);
    }
    function dec() {
        count--;
        console.log(count);
    }
    return {inc,dec};

}

let counter = manageCounter();
counter.inc();
counter.inc();
counter.dec();

