//import mergeSort function


test('MergeSort sorts arrays numerically', () => {
    expect(mergeSort([])).toBe([]);
    expect(mergeSort([73])).toBe([73]);
    expect(mergeSort([1,2,3,4,5])).toBe([1,2,3,4,5]);
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toBe([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(mergeSort([105, 79, 100, 110])).toBe([79, 100, 105, 110]);
})