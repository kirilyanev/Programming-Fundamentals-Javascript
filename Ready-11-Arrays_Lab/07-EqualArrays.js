function isArrayEqual(arrayOne,arrayTwo) {
    let sum = 0;
    for (let i = 0; i < arrayOne.length; i++) {
        let currentIndex = i;
        let currentNumArrayOne = arrayOne[i];
        let currentNumArrayTwo = arrayTwo[i];
        sum += Number(currentNumArrayOne);
        if (currentNumArrayOne !== currentNumArrayTwo) {
            console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
            break;
        }
        if (i + 1 === arrayOne.length) {
            console.log(`Arrays are identical. Sum: ${sum}`);
        }
    }
}
isArrayEqual(['1'], ['10']);