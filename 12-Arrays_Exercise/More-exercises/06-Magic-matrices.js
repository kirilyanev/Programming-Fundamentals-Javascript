// My solution

function isMagic(input) {
    let rowSum = [];
    let colSum = [];
    let isMagical = true;

    for (let i = 0; i < input.length; i++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            currentRowSum += Number(input[i][j]);
        }
        rowSum.push(currentRowSum);

        for (let column = 0; column < input.length; column++) {
            currentColSum += Number(input[column][i]);
        }
        colSum.push(currentColSum);
    }

    for (let number of rowSum) {
        if (number !== rowSum[0]) {
            isMagical = false;
            break;
        }
    }
    
    if (rowSum.join() === colSum.join() && isMagical) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isMagic([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);
isMagic([[1, 0, 0],[0, 1, 0]]);
isMagic([[1, 0, 1],[0, 1, 0],[1, 0, 1]]);

// -------------------------------------------------------------

// Simpler solution with the help of Softuni forums:

// function isMagical(input) {
//     let sum = input[0].reduce((a, b) => a + b, 0);
//     let isMagic = true;

//     for (let i = 0; i < input.length; i++) {
//         let rowSum = input[i].reduce((a, b) => a + b, 0);
//         let colSum = input.map(row => row[i]).reduce((a, b) => a + b, 0);

//         if (rowSum !== sum || colSum !== sum) {
//             isMagic = false;
//             break;
//         }
//     }
//     console.log(isMagic);
// }

// isMagical([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// isMagical([[]])

// --------------------------------------------------------------------------------

// THE SHORTEST SOLUTION
// (https://softuni.bg/forum/36125/09-magic-matrices) -> link for explanation


// function magicMatrices(arr) {

//     let sumRow = arr.map((col => col.reduce((a, b) => a + b)));

//     let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

//     let allEqual = array => array.every( v => v === array[0]);

//     console.log(allEqual(sumRow) && sumRow.toString() === sumCol.toString());
    
// }

// magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);