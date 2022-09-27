// Дърварско решение

// function check(number) {
//     if (number > 10) {
//         if (number % 2 === 0 || number % 3 === 0 || number % 4 === 0 || number % 5 === 0 || number % 6 === 0 || number % 7 === 0 || number % 8 === 0 || number % 9 === 0) {
//             console.log(false);
//         } else {
//             console.log(true);
//         }
//     } else if (number === 2 || number === 3 || number === 5 || number === 7) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
//check(9);

// Елегантно решение

function checkPrime(number) {
    let isPrime = true;
    let divider = 2;
    while (isPrime && divider <= Math.floor(Math.sqrt(number))) {
        if (number % divider === 0) {
            isPrime = false;
        }
        divider += 1;
    }
    console.log(isPrime);
}
checkPrime(81);