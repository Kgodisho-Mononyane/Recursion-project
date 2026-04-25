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
    if (num == 0) {
        return [];
    } else if (num == 1) {
        return [1];
    } else {
        let array = [];

        for (let i = 0; i <= num; i++) {
            let fib = fibsRec(num = 1) + fibsRec(num - 2); {
                array.push(fib)
            } 
        }

        return array;
    }
    

    // } else {
    //     for (let i = 0; i < num; i++) {
    //         let fib = fibsRec(num - 1) + fibsRec(num - 2);
    //         array.push(fib);
    //     }
    // }
    // return array;
}

console.log(fibsRec(5))

//module.exports = {fibs, fibsRec};