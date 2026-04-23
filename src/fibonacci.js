function fibs(num) {
    let array = []
    for (let i = 0; i < num; i++) {

    }
    // Using iteration, write a function fibs which takes a 
    // number and returns an array containing that 
    // many numbers from the Fibonacci sequence.
    return array;
}

function fibsRec(num) {
    let array = [];

    if (num == 0) {
        array = [];
    } else if (num == 1) {
        array = [1];
    } else {
        
    }
    // Using recursion, write a function fibs which takes a 
    // number and returns an array containing that 
    // many numbers from the Fibonacci sequence.
    return array;
}

console.log(fibsRec(1))

//module.exports = {fibs, fibsRec};