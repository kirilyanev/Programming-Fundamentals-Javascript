function productSorting(products) {
    let sortedProducts = products.sort();

    for (let index = 0; index < sortedProducts.length; index++) {
        console.log(`${index + 1}.${sortedProducts[index]}`);
    }
}
productSorting(['Watermelon', 'Banana', 'Apples',]);