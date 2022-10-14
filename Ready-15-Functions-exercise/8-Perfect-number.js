// Wrong solution (gives 83/100 in judge)

// function isNumPerfect(input) {
//     let dividerSum = 0;
//     let dividersCount = [];
//     let number = input;

//     if (number > 0) {
//         while (number !== 1) {
//             let dividedNum = Math.ceil(number / 2);
//             dividersCount.push(dividedNum);
//             number = dividedNum;
//         }
//     } else {
//         return console.log('It\'s not so perfect.');
//     }

//     for (const num of dividersCount) {
//         dividerSum += Number(num);
//     }

//     if (dividerSum === input) {
//         console.log('We have a perfect number!');
//     } else {
//         console.log('It\'s not so perfect.');
//     }
// }
// isNumPerfect();

// Correct solution

function isPerfect(input) {
    let number = Number(input);
    let dividerNumsToCheck = number / 2;
    let sumOfPerfectDividers = 0;

    for (let i = 0; i <= dividerNumsToCheck; i++) {
        let perfectDivider = 0;
        if (number % i === 0) {
            perfectDivider = i;
            sumOfPerfectDividers += perfectDivider;
        }
    }
    if (sumOfPerfectDividers === number && number !== 0) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
isPerfect(0);