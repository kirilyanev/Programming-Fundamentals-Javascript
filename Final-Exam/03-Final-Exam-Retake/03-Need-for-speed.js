function carDriving(input) {
    const carsCount = Number(input.shift());
    let cars = [];

    for (let i = 0; i < carsCount; i++) {
        let line = input.shift();
        let [car, mileage, fuel] = line.split('|');

        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }

    let currLine = input.shift();

    while (currLine !== 'Stop') {
        let [command, argOne, argTwo, argThree, argFour] = currLine.split(' : ');

        switch (command) {
            case 'Drive': {
                let car = argOne;
                let distance = Number(argTwo);
                let fuel = Number(argThree);

                if (cars[car].fuel < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    cars[car].mileage += distance;
                    cars[car].fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }

                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }

                break;
            }

            case 'Refuel': {
                let car = argOne;
                let fuel = Number(argTwo);
                let refill = cars[car].fuel + fuel;

                if (refill > 75) {
                    let fuelNeeded = fuel - (refill - 75);
                    cars[car].fuel = 75;
                    console.log(`${car} refueled with ${fuelNeeded} liters`);
                } else {
                    cars[car].fuel += fuel;
                    console.log(`${car} refueled with ${fuel} liters`);
                }

                break;
            }

            case 'Revert': {
                let car = argOne;
                let kilometers = Number(argTwo);
                let newMileage = cars[car].mileage - kilometers;

                if (newMileage < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    cars[car].mileage = newMileage;
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }

                break;
            }
        }

        currLine = input.shift();
    }

    for (const car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}
carDriving([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);