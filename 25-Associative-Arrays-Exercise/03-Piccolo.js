function piccolo(input) {
    let parkingLot = {};

    while (input.length > 0) {
        currCar = input.shift().split(', ');
        if (currCar[0] === 'IN') {
            parkingLot[currCar[1]] = 'in';
        } else if (currCar[0] === 'OUT') {
            let car = currCar[1]
            delete parkingLot[car];
        }
    }

    let sorted = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b))

    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    }

    for (const car of sorted) {
        console.log(car);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);