function filterRepeatingEl(arr) {
    let uniqueNumbers = [];
    let arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        if (!uniqueNumbers.includes(arr[i])) {
            uniqueNumbers.push(arr[i])
        }
    }
    console.log(uniqueNumbers.join(' '));
}
filterRepeatingEl([7, 8, 9, 7, 2, 3, 4, 1, 2]);