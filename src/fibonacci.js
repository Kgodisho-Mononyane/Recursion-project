export function fibs(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];

    let array = [0, 1];

    for (let i = 2; i < num; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array;
}

console.log(fibs(8))

export function fibsRec(num) {
    if (num == 0) {
        return [];
    } else {
        let array = [];

        function fibonacci(n) {
            if (n < 0) return undefined;
            if (n < 2) return n;
            return fibonacci(n - 1) + fibonacci(n - 2)
        }

        for (let i = 0; i < num; i++) {
            array.push(fibonacci(i))
        }
        return array;
    }
}

//module.exports = {fibs, fibsRec};