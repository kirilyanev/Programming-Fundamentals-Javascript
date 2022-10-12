function checkSign(numOne, numTwo, numThree) {
    isPositive = false;
    if (numOne > 0) {
        if (numTwo < 0 && numThree < 0) {
            isPositive = true;
        } else if (numTwo > 0 && numThree > 0) {
            isPositive = true;
        } else if (numTwo < 0 || numThree < 0) {
            isPositive = false;
        }
    } else if (numOne < 0) {
        if (numTwo < 0 && numThree < 0) {
            isPositive = false;
        } else if (numTwo > 0 && numThree > 0) {
            isPositive = false;
        } else if (numTwo > 0 || numThree > 0) {
            isPositive = true;
        }
    }

    if (isPositive) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
checkSign(-5, 1, 1);