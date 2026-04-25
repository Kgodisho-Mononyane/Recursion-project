import {fibs, fibsRec} from "/src/fibonacci"

test('iterative fibonacci function works with 0', () => {
    expect(fibs(0)).toEqual([]);
})

test('iterative fibonacci function works with 1', () => {
    expect(fibs(1)).toEqual([1]);
})

test('iterative fibonacci function works with 2', () => {
    expect(fibs(2)).toEqual([1,1]);
})

test('iterative fibonacci function works with 5', () => {
    expect(fibs(5)).toEqual([1,1,2,3,5]);
})

test('iterative fibonacci function works with 8', () => {
    expect(fibs(8)).toEqual([1,1,2,3,5,8,13,21]);
})

test('recursive fibonacci works with 0', () => {
    expect(fibsRec(0)).toEqual([]);  
})

test('recursive fibonacci works with 1', () => {
    expect(fibsRec(1)).toEqual([1]);  
})

test('recursive fibonacci works with 2', () => {
    expect(fibsRec(2)).toEqual([1,1]);  
})

test('recursive fibonacci works with 5', () => {
    expect(fibsRec(5)).toEqual([1,1,2,3,5]);  
})

test('recursive fibonacci works with 8', () => {
    expect(fibsRec(8)).toEqual([1,1,2,3,5,8,13,21]);  
})