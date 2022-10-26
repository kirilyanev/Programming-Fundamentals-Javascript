// First solution (80/100 in judge)

// function isDistanceValid(coordinates) {
//     let x1 = coordinates[0];
//     let y1 = coordinates[1];
//     let x2 = coordinates[2];
//     let y2 = coordinates[3];

//     // first compare x1,y1 to x0,y0;

//     if (x1 !== 0 && y1 !== 0) {
//         console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
//     }

//     // second compare x2,y2 to x0,y0;

//     if (x1 !== 0 && y1 !== 0) {
//         console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
//     } else {
//         console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
//     }

//     // finally compare x1,y1 to  x2,y2;

//     let Xdistance = x2 - x1;
//     let Ydistance = y2 - y1;
//     let distance = Math.pow(Xdistance, 2) + Math.pow(Ydistance, 2);
//     let result = Math.sqrt(distance);

//     if (Number.isInteger(result)) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }
// isDistanceValid([2, 1, 1, 1]);


// Solution with (100/100) in judge
function isDistanceValid(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    // first compare x1,y1 to x0,y0;

    let XdistanceOne = x1 - 0;
    let YdistanceOne = y1 - 0;
    let distanceOne = Math.pow(XdistanceOne, 2) + Math.pow(YdistanceOne, 2);
    let resultOne = Math.sqrt(distanceOne);

    if (Number.isInteger(resultOne)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    // second compare x2,y2 to x0,y0;

    let XdistanceTwo = x2 - 0;
    let YdistanceTwo = y2 - 0;
    let distanceTwo = Math.pow(XdistanceTwo, 2) + Math.pow(YdistanceTwo, 2);
    let resultTwo = Math.sqrt(distanceTwo);

    if (Number.isInteger(resultTwo)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    // finally compare x1,y1 to  x2,y2;

    let Xdistance = x2 - x1;
    let Ydistance = y2 - y1;
    let distance = Math.pow(Xdistance, 2) + Math.pow(Ydistance, 2);
    let result = Math.sqrt(distance);

    if (Number.isInteger(result)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

isDistanceValid([3, 0, 0, 4]);