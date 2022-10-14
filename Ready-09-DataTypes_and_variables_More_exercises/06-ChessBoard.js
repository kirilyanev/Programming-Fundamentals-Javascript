// function chessBoard(num) {
//     console.log('<div class="chessboard">');
//     let lastBox = '';
//     let newBox = '';

//     for (let i = 1; i <= num; i++) {
//         console.log('  <div>')
//         for (let j = 1; j <= num; j++) {
//             if (j % 2 == 0) {
//                 box = 'white';
//                 newBox = box;
//                 if (lastBox !== newBox) {
//                     console.log(`    <span class="${box}"></span>`);
//                     lastBox = box;
//                 } else {
//                     console.log(`    <span class="black"></span>`);
//                     lastBox = 'black';
//                 }
//             } else {
//                 if (lastBox !== 'black') {
//                     box = 'black';
//                     console.log(`    <span class="${box}"></span>`);
//                     lastBox = box;
//                 } else {
//                     console.log(`    <span class="white"></span>`);
//                     lastBox = 'white';
//                 }
//             }
//         }
//         console.log('  </div>');
//     }
//     console.log('</div>');
// }
// chessBoard(3);

//Second Attempt (working)

function chessBoard(boxes) {
    let size = Number(boxes)
    let currentColor = 'black';
    let previousColor = '';
    console.log('<div class="chessboard">');
    for (let i = 1; i <= size; i++) {
        console.log('  <div>');
        for (let j = 1; j <= size; j++) {
            console.log(`    <span class="${currentColor}"></span>`);
            previousColor = currentColor;
            currentColor = previousColor === 'black' ? 'white' : 'black';
        }
        console.log('  </div>')
        if (size % 2 === 0) {
            previousColor = currentColor;
            currentColor = previousColor === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>');
}
chessBoard(4);