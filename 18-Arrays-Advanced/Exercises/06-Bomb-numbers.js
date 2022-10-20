// (40/100) My first solution 

// function bombNumbers(numbers, bombInfo) {
//     let numSequence = numbers;
//     let bomb = bombInfo[0];
//     let bombStrength = Number(bombInfo[1]);
//     let bombExplosion = 1 + (Number(bombStrength) * 2);
//     let numSequenceLength = numSequence.length;

//     for (let i = 0; i < numSequenceLength; i++) {
//         let currentNum = numSequence[i];

//         if (currentNum === bomb) {
//             let bombStartIndex = i - bombStrength;
//             numSequence.splice(bombStartIndex, bombExplosion);
//         }
//     }

//     let leftNumSum = 0;
//     numSequence.forEach(element => {
//         leftNumSum += element
//     });

//     console.log(leftNumSum);
// }
// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]);

// (100/100) solution with help of pastebin. (Not very clear)
function bombNumbers(numbers, bombInfo) {
    let numSequence = numbers;
    let bomb = bombInfo[0];
    let bombPower = Number(bombInfo[1]);

    while (numSequence.includes(bomb)) {
        let bombIndex = numSequence.indexOf(bomb);
        let bombExplosion = bombPower * 2 + 1;
        let explosionStartIndex = bombIndex - bombPower;

        if (explosionStartIndex < 0) {
            bombExplosion += explosionStartIndex; // it adds explosionStartIndex(negative num) to bombExplosion --> removing explosion outside(negative) of the array
            explosionStartIndex = 0;
        }

        numSequence.splice(explosionStartIndex, bombExplosion);
    }

    console.log(numSequence.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [2, 1]);