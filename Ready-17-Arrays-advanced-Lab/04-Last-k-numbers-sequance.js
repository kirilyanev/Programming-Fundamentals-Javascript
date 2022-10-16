function lastNumSequence(numbers, sequence) {
    let resultArray = [1];

    for (let i = 1; i < numbers; i++) {
        let sumArray = resultArray.slice(-sequence);
        let sum = 0;
        for (const num of sumArray) {
            sum += num;
        }
        resultArray.push(sum);
    }

    console.log(resultArray.join(' '));
}
lastNumSequence(8, 2);