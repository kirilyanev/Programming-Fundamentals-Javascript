function softuniBar(input) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

    let totalIncome = 0;
    let line = input.shift();

    while (line !== 'end of shift') {

        let currentData = pattern.exec(line)

        if (currentData) {

            let customer = currentData.groups['customer'];
            let product = currentData.groups['product'];
            let count = Number(currentData.groups['count']);
            let price = Number(currentData.groups['price']);

            let productPrice = count * price;

            console.log(`${customer}: ${product} - ${productPrice.toFixed(2)}`);
            totalIncome += productPrice;

            line = input.shift();
            currentData = pattern.exec(line);
        } else {
            line = input.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softuniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])