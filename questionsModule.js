const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do? "
];


const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`question answered: ${answer}`));

// adding a complete event:
answerEvents.on("complete", answers => { 
    console.log("Thank you for your answers. ");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());