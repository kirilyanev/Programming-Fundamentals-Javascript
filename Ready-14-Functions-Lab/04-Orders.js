function calculateOrder(order, quantity) {
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    
    if (order === 'coffee') {
        console.log((coffeePrice * quantity).toFixed(2));
    } else if(order === 'water') {
        console.log((waterPrice * quantity).toFixed(2));
    } else if(order === 'coke') {
        console.log((cokePrice * quantity).toFixed(2));
    } else if(order === 'snacks') {
        console.log((snacksPrice * quantity).toFixed(2));
    }
}
calculateOrder("coffee", 2);