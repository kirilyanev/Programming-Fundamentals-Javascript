function solve(input) {
    let newArray = input;
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < newArray.length; i++) {
        let currentNum = Number(input[i]);
        firstSum += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
            secondSum += currentNum;
            newArray[i] = currentNum;
        } else {
            currentNum -= i;
            secondSum += currentNum;
            newArray[i] = currentNum;
        }
    }
    console.log(`[ ${newArray.join(', ')} ]`);
    console.log(firstSum);
    console.log(secondSum);
}
solve([5, 15, 23, 56, 35]);