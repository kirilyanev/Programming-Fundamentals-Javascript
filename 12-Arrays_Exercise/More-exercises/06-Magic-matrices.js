function isMagical(input) {
    let rowSum = [];
    let colSum = [];

    for (let row = 0; row < input.length; row++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        for (let col = 0; col < input[row].length; col++) {
            currentRowSum += Number(input[row][col]);
        }
        rowSum.push(currentRowSum);

        for (let column = 0; column < input.length; column++) {
            currentColSum += Number(input[column][row]);
        }
        colSum.push(currentColSum);
    }

    if (rowSum.join() === colSum.join()) {
        console.log('true');
    } else {
        console.log('false');
    }
}

isMagical([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);