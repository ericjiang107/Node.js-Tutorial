const path = require("path");

const dirPath = path.join(__dirname, "www", "files", "uploads"); // join method joins all the paths within something together

console.log(dirPath)

const util = require("util");
util.log( path.basename(__filename) );
util.log(" ^ The name of the current file"); // logs the time 

const v8 = require("v8");
util.log(v8.getHeapStatistics()); // get memory usage