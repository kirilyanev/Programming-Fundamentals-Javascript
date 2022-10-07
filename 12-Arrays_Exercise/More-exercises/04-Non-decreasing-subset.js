// Solution without .filter() method

// function increasingSubset(input) {
//     let biggestNum = input[0];
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         let currentNum = input[i];
//         if (currentNum >= biggestNum) {
//             result.push(currentNum);
//             biggestNum = currentNum;
//         }
//     }
//     console.log(result.join(' '));
// }
// increasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);


//Solution with .filter() method

function increasingSet(numbers) {
    const array = numbers;
    let biggestNum = array[0];
    let result = [];
    result = array.filter(isBigger);

    function isBigger(num) {
        if (num >= biggestNum) {
            biggestNum = num;
        }
        return num >= biggestNum;
    }
    console.log(result.join(' '));
}
increasingSet([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);