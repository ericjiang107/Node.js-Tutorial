let count = 0;

const inc = () => ++count;

const dec = () => --count;

// function to return the value of the count:
const getCount = () => count;


module.exports = { // to export a module
    inc,
    dec,
    getCount
}