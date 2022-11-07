function storeItems(input) {
    const storage = new Map();

    for (const line of input) {
        let items = line.split(' ');
        let product = items[0];
        let quantity = Number(items[1]);

        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            let currentQuantity = storage.get(product);
            let newQuantity = currentQuantity + quantity;
            storage.set(product, newQuantity)
        }

    }

    for (const kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storeItems(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])