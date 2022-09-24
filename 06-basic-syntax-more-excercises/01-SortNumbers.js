function sorting(numOne,numTwo,numThree) {
    let numArray = [numOne,numTwo,numThree];
    numArray = numArray.sort((a, b) => b - a);
    let firstNum = numArray[0];
    let secondNum = numArray[1];
    let thirdNum = numArray[2];
    console.log(`${firstNum}\n${secondNum}\n${thirdNum}`);
}