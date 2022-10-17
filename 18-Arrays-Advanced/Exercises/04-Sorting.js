function sortingArray(arr) {
    let arrAscending = arr.sort((a, b) => a - b);
    let result = [];

    while (arrAscending.length !== 0) {
        let lastElement = arrAscending.pop();
        let firstElement = arrAscending.shift();
        result.push(lastElement);
        result.push(firstElement);
    }
    console.log(result.join(' '));
}
sortingArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortingArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);