function matrix(number) {
    let matrixSize = number;
    let row = '';
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            row += `${number} `;
        }
        row += '\n'
    }
    console.log(row);
}
matrix(7)