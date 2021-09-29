// Adding custom module: 

// readline interface:
const readline = require("readline");

// adding in EventEmitter:
const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function for answers:
module.exports = (questions, done = f => f) => { // done meaning to invoke this --> exporting this module
    emitter.emit("answer", answer); // everytime someone answers a question, it raises an event

    const answers = [];
    // destructuring for specific question answers:
    const [firstQuestion] = questions;

    // invoking emitter function
    const emitter = new EventEmitter();

    const questionAnswered = answer => { // this function will take in the answer
        answers.push(answer); // when a user answers a question, we can push the answer directly into array of answers
        if(answers.length < questions.length) {
            // ask another question:
            rl.question(questions[answers.length], questionAnswered);
        } else {
            // emit a complete event:
            emitter.emit("complete", answers);
            done(answers)
        }
    };
    rl.question(firstQuestion, questionAnswered);

    return emitter;
}

