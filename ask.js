const readline = require("readline");

// created interface:
const rl = readline.createInterface({ // this means we can collect and ask questions from the terminal
    input: process.stdin,
    output: process.stdout
});

// using the question function:
rl.question("How do you like Node? ", answer => {
    console.log(`Your answer: ${answer}`)
});

