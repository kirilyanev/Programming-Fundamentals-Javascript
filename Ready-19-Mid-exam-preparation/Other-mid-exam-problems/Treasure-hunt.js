function pirateLoot(input) {
    let loot = input.shift().split('|');
    let currentLine = input.shift().split(' ');

    while (currentLine[0] != 'Yohoho!') {
        let command = currentLine.shift();

        if (command === 'Loot') {
            for (let i = 0; i < currentLine.length; i++) {
                let item = currentLine[i];

                if (!loot.includes(item)) {
                    loot.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(currentLine.shift());

            if (loot[index]) {
                let removedItem = loot.splice(index, 1);
                loot.push(removedItem[0]);
            }
        } else if (command === 'Steal') {
            let stolenItemsCount = Number(currentLine.shift());
            let stolenItemStartIndex = loot.length - stolenItemsCount;
            if (loot.length > stolenItemsCount) {
                let stolenItems = loot.splice(stolenItemStartIndex, stolenItemsCount);
                console.log(stolenItems.join(', '));
            } else {
                let stolenItems = loot;
                return console.log(`${stolenItems.join(', ')}\nFailed treasure hunt.`);
            }
        }

        currentLine = input.shift().split(' ')
    }

    let treasureGain = 0;
    let itemsCount = loot.length;

    for (let j = 0; j < loot.length; j++) {
        let itemLength = Number(loot[j].length);
        treasureGain += itemLength
    }

    let averageGain = treasureGain / itemsCount;

    if (loot.length > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
pirateLoot(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);