function numModification(input) {
    let number = input.toString();
    let sumOfDigits = 0;
    let averageValue = 0;

    for (let i = 0; i < number.length; i++) {
        let currentNum = number[i];
        sumOfDigits += Number(currentNum);
    }

    averageValue = sumOfDigits / number.length;

    if (averageValue > 5) {
        return console.log(number);
    } else {
        number += '9';
        return numModification(number);
    }
}
numModification(5835);