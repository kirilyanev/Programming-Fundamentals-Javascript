// Teacher solution:
// function reverseInPlace(input) {
//     for (let i = 0; i <= input.length / 2; i++) { // Thanks to Margarita :)
//         let tempElement = input[i];

//         input[i] = input[input.length - 1 - i];
//         input[input.length - 1 - i] = tempElement;
//     }

//     console.log(input.join(' '));
// }
// reverseInPlace(['a', 'b', 'c', 'd', 'e']);

//My solution:

function reverseArr(inputArray) {
    let elementsCount = inputArray.length;
    let result = [];
    for (let i = 0; i < elementsCount; i++) {
        result.push(inputArray[elementsCount - 1 - i]);
    }
    console.log(result.join(' '));
}
reverseArr(['a', 'b', 'c', 'd', 'e']);