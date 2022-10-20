function pcBuild(input) {
    let currentPart = input.shift();
    let totalPriceBeforeTaxes = 0;
    let taxes = 0;

    while (currentPart !== 'special' && currentPart !== 'regular') {
        let partPrice = Number(currentPart);

        if (partPrice < 0) {
            console.log('Invalid price!');
        } else {
            taxes += partPrice * 0.2;
            totalPriceBeforeTaxes += partPrice;
        }

        currentPart = input.shift();
    }

    let totalPriceAfterTaxes = totalPriceBeforeTaxes + taxes;

    if (currentPart == 'special') {
        totalPriceAfterTaxes *= 0.9;
    }

    if (totalPriceAfterTaxes == 0) {
        return console.log('Invalid order!');
    }

    return console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPriceBeforeTaxes.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPriceAfterTaxes.toFixed(2)}$`);
}
pcBuild((['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']));