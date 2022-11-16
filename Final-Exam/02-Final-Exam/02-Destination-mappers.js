//First solution 60/100 in judge

// function destinationsMapping(text) {
//     let patternOne = /=([A-Z][A-z]+)=/g
//     let patternTwo = /\/([A-Z][A-z]+)\//g

//     let firstDest = patternOne.exec(text);
//     let secondDest = patternTwo.exec(text);
//     let result = [];

//     while (firstDest) {
//         result.push(firstDest[1])
//         firstDest = patternOne.exec(text);

//     }

//     while (secondDest) {
//         result.push(secondDest[1])
//         secondDest = patternTwo.exec(text);

//     }

//     let travelPoints = 0;

//     for (const destination of result) {
//         travelPoints += destination.length;
//     }

//     console.log(`Destinations: ${result.join(', ')}`);
//     console.log(`Travel Points: ${travelPoints}`);
// }

// Final solution 100/100
function destinationsMapping(input) {
    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g
    let allDestinations = input.match(pattern)
    let result = [];

    if (allDestinations === null) {
        console.log(`Destinations: `);
        console.log(`Travel Points: 0`);
    } else {
        for (const match of allDestinations) {
            let destination = match.substring(1, match.length - 1)
            result.push(destination);
        }

        let travelPoints = 0;

        for (const destination of result) {
            travelPoints += destination.length;
        }

        console.log(`Destinations: ${result.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    }
}
destinationsMapping(("ThisIs some InvalidInput"));