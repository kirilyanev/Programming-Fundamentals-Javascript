function sumDigits(input) {
    let numberToString = input.toString();
    let oddResult = oddSum(numberToString);
    let evenResult = evenSum(numberToString);

    function oddSum(number) {
        let oddNumSum = 0;
        for (let i = 0; i < number.length; i++) {
            if (Number(number[i]) % 2 != 0) {
                oddNumSum += Number(number[i]);
            }
        }
        return oddNumSum;
    }

    function evenSum(num) {
        let evenNumSum = 0;
        for (let j = 0; j < num.length; j++) {
            if (Number(num[j]) % 2 == 0) {
                evenNumSum += Number(num[j]);
            }
        }
        return evenNumSum;
    }
    console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);
}
sumDigits(3495892137259234);