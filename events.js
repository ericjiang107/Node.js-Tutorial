// EventEmitter Method -- asynchronous event

const events = require("events");

const emitter = new events.EventEmitter(); // this will raise new custom events

emitter.on("customEvent", (message, user) => { // wire up a function for custom events
    console.log(`${user}: ${message}`)
});

emitter.emit("customEvent", "Hello World", "Computer"); 
emitter.emit("customEvent", "That's pretty cool huh?", "Eric");


process.stdin.on("data", data => {

    const input = data.toString().trim();

    if(input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    
    emitter.emit("customEvent", input, "terminal");
});