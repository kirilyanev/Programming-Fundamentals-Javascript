function smallestNums(numbers) {
    let sortedArray = numbers.sort((a, b) => a - b);
    let result = sortedArray.slice(0, 2);
    console.log(result.join(' '));
}
smallestNums([3, 0, 10, 4, 7, 3]);