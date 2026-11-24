// function getUserDetail(id){

// }

// function getID(fn){
//     let id = 101;
//     fn(id);
// }

// getID(getUserDetail);


function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();  // calling the callback function
}

function afterGreet() {
    console.log('Greeting is complete!');
}

greet('Anjali', afterGreet);

getUser(userId, (user) => {
    getOrders(user, (orders) => {
        processOrders(orders, (processed) => {
            sendEmail(processed, (confirmation) => {
                console.log("Order Processed:", confirmation);
            });
        });
    });
});