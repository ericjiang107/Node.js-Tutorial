
process.stdout.write("Hello "); // writeable stream and implemenets a write method
process.stdout.write("World \n");

// Using the standard output to write and answer questions:

const questions = [
    "what is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => { // (i=0) because that is the index of the question being asked and if nothing is asked, the index is 0
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `); // prompt the user to type
};

// making the questions bar asynchronous so they occur at the same time 
ask();

const answers = [];

process.stdin.on('data', data => { // standard input with the on method that will listen for events ('typeEvent', handleEvent)
    // process.stdout.write(`\n\n ${data.toString().trim()} \n\n`) // trim gets rid of any leading or ongoing commands
    // process.exit(); // invoking an exit event
    answers.push(data.toString().trim());

    // checking length of the array:
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
        Thank you for your answers. 
        Go ${activity} ${name} you can write ${lang} code later
    `)
})