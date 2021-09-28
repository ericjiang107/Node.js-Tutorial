const waitTime = 3000; // millisecond

const waitInterval = 500;
let currentTime = 0; // use let if we want the users to change the value of currentTime

// adding increment show time waited:
const incTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime/waitTime) * 100);
    // console.log(`waiting ${currentTime/1000} seconds`);
    process.stdout.clearLine(); // gets rid of the last line written in the terminal
    process.stdout.cursorTo(0); // this will move the cursor back to the set destination
    process.stdout.write(`waiting ... ${percentage}%`);
};

console.log(`setting a ${waitTime/1000} second delay`);

// creating timer to invoke when the timer is finished:
const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0);
    console.log("done");
};

const interval = setInterval(incTime, waitInterval); // will call the incTime function over and over again

// setTimeout method:
setTimeout(timerFinished, waitTime);

// this process will run asynchronously