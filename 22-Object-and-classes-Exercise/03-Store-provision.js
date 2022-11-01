function storeProvisions(available, delivery) {
    const provisions = {};
    const stockLength = available.length;
    const deliveryLength = delivery.length;

    for (let i = 0; i < stockLength; i += 2) {
        const currentProduct = available[i];
        provisions[currentProduct] = Number(available[i + 1]);
    }

    for (let j = 0; j < deliveryLength; j += 2) {
        const currentProduct = delivery[j];
        if (!provisions.hasOwnProperty(currentProduct)) {
            provisions[currentProduct] = 0;
        }
        provisions[currentProduct] += Number(delivery[j + 1])
    }

    for (const key in provisions) {
        console.log(`${key} -> ${provisions[key]}`);
    }
}


storeProvisions(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])