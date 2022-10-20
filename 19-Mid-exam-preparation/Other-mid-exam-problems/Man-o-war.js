function battle(input) {
    let pirateStatus = input
        .shift()
        .split('>')
        .map(Number);
    let warshipStatus = input
        .shift()
        .split('>')
        .map(x => Number(x));

    const maxCapacity = Number(input.shift());
    let currentLine = input.shift().split(' ');

    while (currentLine[0] !== 'Retire') {
        let command = currentLine[0];

        if (command === 'Fire') {
            let index = Number(currentLine[1]);
            let damage = Number(currentLine[2]);
            if (warshipStatus[index]) {
                warshipStatus[index] -= damage;
                if (warshipStatus[index] <= 0) {
                    return console.log('You won! The enemy ship has sunken.');
                }
            }
        } else if (command === 'Defend') {
            const startIndex = Number(currentLine[1]);
            const endIndex = Number(currentLine[2]);
            const damage = Number(currentLine[3]);

            if (pirateStatus[startIndex] && pirateStatus[endIndex]) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateStatus[i] -= damage;
                    if (pirateStatus[i] <= 0) {
                        return console.log('You lost! The pirate ship has sunken.');
                    }
                }
            }
        } else if (command === 'Repair') {
            const index = Number(currentLine[1]);
            const health = Number(currentLine[2]);

            if (pirateStatus[index]) {
                pirateStatus[index] += health;
                if (pirateStatus[index] > maxCapacity) {
                    pirateStatus[index] = maxCapacity;
                }
            }
        } else if (command === 'Status') {
            let sectionRepairCount = 0;
            let needRepair = maxCapacity * 0.20;
            for (let j = 0; j < pirateStatus.length; j++) {
                if (pirateStatus[j] < needRepair) {
                    sectionRepairCount++;
                }
            }

            console.log(`${sectionRepairCount} sections need repair.`);
        }

        currentLine = input.shift().split(' ');
    }

    let pirateShipSum = 0;
    let warshipSum = 0;

    pirateStatus.forEach(element => {
        pirateShipSum += Number(element);
    });

    warshipStatus.forEach(element => {
        warshipSum += Number(element);
    });

    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`);
}
battle(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);