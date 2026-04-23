//const fibonacci = require('./fibonacci');

test('iterative fibonacci function works', () => {
    expect(fibs(0)).toBe([]);
    expect(fibs(1)).toBe([1]);
    expect(fibs(2)).toBe([1,1]);
    expect(fibs(5)).toBe([1,1,2,3,5]);
    expect(fibs(8)).toBe([1,1,2,3,5,8,13,21]);
})

test('recursive fibonacci function works', () => {
    expect(fibsRec(0)).toBe([]);
    expect(fibsRec(1)).toBe([1]);
    expect(fibsRec(2)).toBe([1,1]);
    expect(fibsRec(5)).toBe([1,1,2,3,5]);
    expect(fibsRec(8)).toBe([1,1,2,3,5,8,13,21]);
})