// Solution using built-in function

// function rotation(input) {
//     let theArray = input;
//     let rotations = Number(input[input.length - 1]);
//     theArray.pop();
//     for (let r = 1; r <= rotations; r++) {
//         let lastElement = theArray.pop();
//         theArray.unshift(lastElement);
//     }
//     console.log(theArray.join(' '));
// }

// Solution without built-in function

function rotate(input) {
    let rotations = Number(input[input.length - 1]);
    let startingArray = input;
    startingArray.pop();
    let rotatingArray = [];
    let currentArray = startingArray;
    let lastElement = 0;

    for (let i = 1; i <= rotations; i++) {
        lastElement = currentArray[currentArray.length - 1];
        rotatingArray[0] = lastElement;
        for (let i = 0; i < startingArray.length - 1; i++) {
            rotatingArray[i + 1] = currentArray[i];
        }
        
        currentArray = rotatingArray;
        rotatingArray = [];
    }

    console.log(currentArray.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);