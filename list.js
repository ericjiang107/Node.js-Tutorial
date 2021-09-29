// to read files from assests folder:

const files = fs.readdirSync("./assets"); // won't work because we don't have an assets folder here

// using a async function:
fs.readdir("./assets", (err, files) => { // any errors in the files
    if(err) { // if error exists then throw the error
        throw err;
    }
    console.log("complete");
    console.log(files);
});

// to read text from assets file:
const fs = require("fs");

const text = fs.readFileSync("./filepath/specificfile", "UTF-8", (err, text) => { // use UTF-8 for text files
    console.log("file contents read");
    console.log(text)
});

// to write to file: use writeFile() method 