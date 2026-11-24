let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure

let res = new Promise (
    (resolve, reject) => {
        let n = 4;
        if(n>5){
        setTimeout(() => {
            return reject("Promise Rejected");
        },1000
        );}
    }
);

res.then((result) => {
    console.log(result.json());
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Promise Completed");
})





const promise3 = Promise.resolve(3);
const promise4 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise3, promise4];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);



const promise5 = Promise.reject(new Error("error"));
const promise6 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise7 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promisess = [promise5, promise6, promise7];

Promise.any(promisess).then((value) => console.log(value));

// Expected output: "quick"


const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise8, promise9]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
