function taxCalculator(input) {
    let carList = input.shift().split('>>');
    let totalTaxes = 0;
    let taxes = 0;

    while (carList.length != 0) {
        let currentCarInfo = carList.shift().split(' ');
        let car = currentCarInfo[0];
        let yearsToTax = currentCarInfo[1];
        let kilometers = currentCarInfo[2];

        if (car === 'family') {
            let taxIncrease = Math.floor(kilometers / 3000);
            taxes = taxIncrease * 12 + (50 - (5 * yearsToTax));
            console.log(`A ${car} car will pay ${taxes.toFixed(2)} euros in taxes.`);
            totalTaxes += taxes;
        } else if (car === 'heavyDuty') {
            let taxIncrease = Math.floor(kilometers / 9000);
            taxes = taxIncrease * 14 + (80 - (8 * yearsToTax));
            console.log(`A ${car} car will pay ${taxes.toFixed(2)} euros in taxes.`);
            totalTaxes += taxes;
        } else if (car === 'sports') {
            let taxIncrease = Math.floor(kilometers / 2000);
            taxes = taxIncrease * 18 + (100 - (9 * yearsToTax));
            console.log(`A ${car} car will pay ${taxes.toFixed(2)} euros in taxes.`);
            totalTaxes += taxes;
        } else {
            console.log('Invalid car type.');
        }
    }

    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);