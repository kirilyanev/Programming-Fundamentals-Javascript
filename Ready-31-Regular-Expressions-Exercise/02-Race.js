function race(input) {
    const racersList = input.shift().split(', ');
    let racersData = {};

    racersList.forEach(racer => {
        racersData[racer] = 0;
    });

    const firstPattern = /[A-Za-z]/g;
    const secondPattern = /[\d+]/g;

    let currLine = input.shift();

    while (currLine !== 'end of race') {
        let racer = (currLine.match(firstPattern)).join('');
        let distanceData = (currLine.match(secondPattern)).join('');
        let distance = 0;

        for (const digit of distanceData) {
            distance += Number(digit);
        }

        if (racersList.includes(racer)) {
            racersData[racer] += distance;
        }

        currLine = input.shift()
    }

    let sorted = Object.entries(racersData).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);