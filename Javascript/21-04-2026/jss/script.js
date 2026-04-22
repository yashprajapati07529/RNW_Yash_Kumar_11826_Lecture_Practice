// Promises with async and await in javascript

/*

state:
1. Pending
2. Resolved (Fullfilled)
3. Rejected

*/

const myPromise = new Promise((resolve, reject) => {
    let sucess = true;

    if (sucess) {
        resolve("Task Completed!!!")
    } else {
        reject("Task Failed!!")
    }
})

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Task Successful");

})

function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received from server.")
        }, 2000)
    })
}

fetchdata().then((data) => {
    console.log(data);
})

async function getdata() {
    return "Hello Async"
}

// getdata().then((result) => console.log(result))

console.log(getdata());


