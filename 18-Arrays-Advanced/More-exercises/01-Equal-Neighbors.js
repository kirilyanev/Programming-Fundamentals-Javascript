function findNeighbours(matrix) {
    let pairsCount = 0;
    let transposedArr = [];

    for (let index = 0; index < matrix.length; index++) {
        let arr = matrix[index];
        for (let i = 0; i < arr.length; i++) {
            let currEl = arr[i];
            let nextEl = arr[i + 1];
            if (currEl === nextEl) {
                pairsCount++
            }
        }
    }

    const colCount = matrix[0].length;
    const rowCount = matrix.length

    for (let col = 0; col < colCount; col++) {
        let newRow = '';
        for (let row = 0; row < rowCount; row++) {
            let currEl = matrix[row][col];
            newRow += `${currEl} `;
        }
        transposedArr.push(newRow)
    }

    for (let index = 0; index < transposedArr.length; index++) {
        let arr = transposedArr[index].trim().split(' ');
        for (let i = 0; i < arr.length; i++) {
            let currEl = arr[i];
            let nextEl = arr[i + 1];
            if (currEl === nextEl) {
                pairsCount++
            }
        }
    }

    console.log(pairsCount);
}

findNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);


findNeighbours([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);

