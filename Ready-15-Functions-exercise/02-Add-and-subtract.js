function addAndSubstract(numOne,numTwo,numThree) {
    function sum(firstNum,secondNum) {
        let sumOfNumbers = firstNum + secondNum;
        return sumOfNumbers;
    }
    function subtract(numberSum, thirdNum) {
        let result = numberSum - thirdNum;
        return result;
    }

    console.log(subtract(sum(numOne,numTwo),numThree));
}
addAndSubstract(1,17,30);