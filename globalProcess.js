// Process object can be accessed globally and contains information and tools to be interacted -- get environment information 

console.log(process.pid) // to get the process id

console.log(process.versions.node); // to get the current version

console.log(process.argv); // an array that contains everything we typed for the process --> shows the path for where the node is located in
// We can add more to it in the terminal 

// ex:
const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`)

// to get a specific word of greeting:
const grab = (flag) => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1; // using indexOf command since this is an array and +1 because we want the value
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting"); // grab is a function that looks for the specific flag
const user = grab("--user");

console.log(`${greeting} ${user}`);