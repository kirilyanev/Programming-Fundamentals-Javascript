function mining(yield) {
    let startingYield = yield;
    let dayCount = 0;
    let minedSpice = 0;
    const crewConsumables = 26;

    while (startingYield >= 100) {
        dayCount += 1;
        minedSpice += startingYield;
        minedSpice -= crewConsumables;
        startingYield -= 10;
    }
    minedSpice -= crewConsumables;
    if (minedSpice >= 0) {
        console.log(`${dayCount}\n${minedSpice}`)
    } else {
        console.log(`${dayCount}\n0`)
    }
}
mining(111);