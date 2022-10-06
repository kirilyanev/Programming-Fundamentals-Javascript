//Not very optimised solution(difficult to read), but works. It can be further improved.

function sequence(input) {
    let arrayLength = input.length;
    let sequenceArray = [];
    let currentSeqArr = [];
    let lastSeqArr = [];
    let sequenceArrayLength = 0;
    let sequenceStarted = false;
    let currentSeqArrLength = 0;
    let lastSeqArrLength = 0;

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = input[i];
        let nextNum = input[i + 1];
        if (currentNum === nextNum) {
            if(sequenceStarted) {
                sequenceArray.push(nextNum);
                sequenceArrayLength += 1;
            } else {
                sequenceArray.push(currentNum);
                sequenceArray.push(nextNum);
                sequenceStarted = true;
                sequenceArrayLength = 2;
            }
            currentSeqArrLength = sequenceArrayLength;
            currentSeqArr = sequenceArray;
            if (currentSeqArrLength > lastSeqArrLength) {
                lastSeqArrLength = currentSeqArrLength;
                lastSeqArr = currentSeqArr;
            }
        } else {
            sequenceStarted = false;
            sequenceArrayLength = 0;
            sequenceArray = [];
        }
    }
    console.log(lastSeqArr.join(' '));
}
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);