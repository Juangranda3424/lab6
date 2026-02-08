const factorial = (a) => {

    if (a === 0) {
        return 1;
    }
    return a * factorial(a - 1);

};

const fibonacci = (a) => {

    if (a === 0) {
        return 0;
    }
    if (a === 1) {
        return 1;
    }
    return fibonacci(a - 1) + fibonacci(a - 2);

}; 

module.exports = { factorial, fibonacci };