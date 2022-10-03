function isEqual(input) {
    arrayLength = input.length
    let isEqual = false;
    let currentIndex;
    for (let i = 0; i < arrayLength; i++) {
        currentIndex = i;
        let leftSum = 0;
        let rightSum = 0;
        for (let r = i + 1; r < arrayLength; r++) {
            rightSum += Number(input[r]);
        }
        for (let l = i - 1; l >= 0; l--) {
            leftSum += Number(input[l]);
        }
        if (rightSum === leftSum) {
            isEqual = true;
            break;
        }
    }
    if (isEqual) {
        console.log(currentIndex);
    } else {
        console.log('no');
    }
}
isEqual([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);