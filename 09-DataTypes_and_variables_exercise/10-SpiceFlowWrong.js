function mining(yield) {
    let startingYield = yield;
    let dayCount = 0;
    let minedSpice = 0;
    const crewConsumables = 26;

    while(startingYield >= 100) {
        dayCount += 1;
        minedSpice += startingYield
        startingYield -= 10;
    }
    if (yield <= 100) {
        dayCount = 1;
        if (minedSpice < 26) {
            minedSpice = 0;
            console.log(`${dayCount}\n${minedSpice}`)
        } else {
            minedSpice -= (dayCount) * crewConsumables;
        console.log(`${dayCount}\n${minedSpice}`)
        }
        
    } else{
        dayCount += 1;
        minedSpice -= (dayCount) * crewConsumables;
        console.log(`${dayCount}\n${minedSpice}`)
    }
}
mining(111);