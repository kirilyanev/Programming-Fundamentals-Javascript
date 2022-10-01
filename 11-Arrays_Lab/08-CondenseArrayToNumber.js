function sumArray(input) {
    let firstArrayLength = input.length;
    let currentArrayLength = input.length;
    let currentArray = input;
    let sumArray = [];
    let i = 0;

    while (i < firstArrayLength - 1) {
        for (let j = 0; j < currentArrayLength - 1; j++) {
            let digitSum = currentArray[j] + currentArray[j + 1];
            sumArray.push(digitSum);
        }
        currentArray = sumArray;
        currentArrayLength = sumArray.length;
        i++
    }
    if (firstArrayLength <= 1) {
        console.log(input[0]);
    } else {
        console.log(sumArray[sumArray.length - 1]);
    }
}
sumArray([5,0,4,1,2]);