"use strict";
// Assignment Asynchronous Promises
Object.defineProperty(exports, "__esModule", { value: true });
// Assignmnet 1:
//  Write a simple asynchronous Typescript function fetchGreeting that return a greeting
//   message after a 2-second delay using setTimeout.
// function that return greeting message 2 second delay
async function fetchGreeting() {
    return setTimeout(() => {
        console.log("Hello Sir");
    }, 2000);
}
fetchGreeting();
// Assignment 2:
//  Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second,
//   and then logs "Task completed".Use setTimeout for the delay.
// function simulateTask
function simulateTask() {
    console.log("\n***** Task Started ******\n");
    // use setTimeout
    setTimeout(() => {
        console.log("\n Task Completed!\n"); // log after 1 second delay
    }, 1000);
}
simulateTask();
// Assignment 3:
//   Write a function fetchData that returns a Promise which resolves with the string
//   "Data fetched successfully!" after a delay of 1 second.
// function fetchData that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Fetched Successfully!"); // after a delay of 1 second
        }, 1000);
    });
}
fetchData().then((output) => {
    // resolve(use .then )
    console.log(output);
});
// Assignment 4:
//  Write a function fetchWithError that return a promises.It should randomly either resolve with
// "Data fetch successfully" or reject with "Data fetch failed" after a delay of 1 second,Handle the
//  rejection using .catch
// function fetchWithError that return a promises
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("\n****** Data Fetched Successfully! ******\n");
            }
            else {
                reject("\n ~~~~~~~ Data Fetch Failed! ~~~~~~~");
            }
        }, 1000);
    });
}
fetchWithError()
    .then((Response) => {
    //  resolve (we use .then)
    console.log(Response);
})
    .catch((error) => {
    //  reject (we use .catch)
    console.log(error);
});
// Assignment 5:
//   Write a function executeSequentially that execute two functions fetchData and processData sequentially
//   using Promises, and logs the results in the order they are called.
// two functions fetchData and processData
function fetch_Data() {
    return new Promise((resolve, reject) => {
        resolve("Data fetched successfully");
    });
}
function process_Data() {
    return new Promise((resolve, reject) => {
        resolve("Data process succssfully ");
    });
}
//function executeSequentially
function executeSequentially() {
    fetch_Data().then((responce) => {
        // logs the results in the order they are called.
        console.log(responce);
    });
    process_Data().then((message) => {
        console.log(message);
    });
}
executeSequentially();
