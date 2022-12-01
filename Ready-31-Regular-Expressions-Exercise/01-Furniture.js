function boughtFurniture(input) {
    const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d+]+)/g;

    let index = 0;
    let totalSpend = 0;

    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {
        let product = input[index];
        let validProduct = pattern.exec(product);

        while (validProduct !== null) {
            const productName = validProduct.groups['name'];

            console.log(productName);

            const price = validProduct.groups['price'];
            const quantity = validProduct.groups['quantity'];

            totalSpend += price * quantity;
            validProduct = pattern.exec(product);
        }

        index++;
    }

    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
}

boughtFurniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);