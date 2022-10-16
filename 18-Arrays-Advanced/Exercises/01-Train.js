function train(input) {
    let passengersInWagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ');

        if (currentRow[0] === 'Add') {
            let newPassengers = Number(currentRow[1]);
            passengersInWagons.push(newPassengers);
        } else {
            for (let j = 0; j < passengersInWagons.length; j++) {
                let currentPassengersWagon = Number(currentRow[0]);
                if (passengersInWagons[j] + currentPassengersWagon <= maxCapacity) {
                    passengersInWagons[j] += currentPassengersWagon;
                    break;
                }
            }
        }
    }
    console.log(passengersInWagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])