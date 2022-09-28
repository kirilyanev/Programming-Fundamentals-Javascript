function goldMining(inputArray) {
    const goldToLeva = 67.51;
    const bitcoin = 11949.16;
    let daysMining = inputArray.length;
    let minedGold = 0;
    let totalBank = 0;
    let purchasedBitcoins = 0;
    let dayOfPurchasedBitcoin = 0;
    let leftMoney = 0;
    for (let day = 1;day <= daysMining; day++) {
        if (day % 3 != 0) {
            minedGold = inputArray[day - 1];
        } else {
            minedGold = inputArray[day - 1] * 0.70;
        }
        totalBank += minedGold * goldToLeva;
        if (totalBank >= bitcoin) {
            purchasedBitcoins = Math.floor(totalBank / bitcoin);
        }
        if (totalBank >= bitcoin && dayOfPurchasedBitcoin === 0) {
            dayOfPurchasedBitcoin = day;
        }
        leftMoney = Math.abs(purchasedBitcoins * bitcoin - totalBank);
    }
    if (purchasedBitcoins >= 1) {
        console.log(`Bought bitcoins: ${purchasedBitcoins}\n` + 
        `Day of the first purchased bitcoin: ${dayOfPurchasedBitcoin}\n` + 
        `Left money: ${leftMoney.toFixed(2)} lv.`)
    } else {
        console.log(`Bought bitcoins: ${purchasedBitcoins}\n` + 
        `Left money: ${leftMoney.toFixed(2)} lv.`)
    }
}
goldMining([100, 200, 300]);