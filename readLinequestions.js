// readline interface:
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do? "
];

// function for answers:
const collectAnswers = (questions, done) => { // done meaning to invoke this
    const answers = [];
    // destructuring for specific question answers:
    const [firstQuestion] = questions;

    const questionAnswered = answer => { // this function will take in the answer
        answers.push(answer); // when a user answers a question, we can push the answer directly into array of answers
        if(answers.length < questions.length) {
            // ask another question:
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers)
        }
    }
    rl.question(firstQuestion, questionAnswered);
    // done(answers)
}

collectAnswers(questions, answers => { // array of questions, handle with a callback function
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});