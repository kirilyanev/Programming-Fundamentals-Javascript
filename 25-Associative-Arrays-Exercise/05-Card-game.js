function cardGame(arr) {
    let players = {};

    for (const line of arr) {
        let playerAndCards = line.split(':')

        if (!players[playerAndCards[0]]) {
            players[playerAndCards[0]] = playerAndCards[1];
        } else {
            players[playerAndCards[0]] += `,` + playerAndCards[1];
        }
    }

    for (const playerName in players) {
        let allCards = players[playerName].split(',');
        let uniqueCards = [... new Set(allCards)];

        let sum = cardSum(uniqueCards);
        players[playerName] = sum;
    }

    for (const key in players) {
        console.log(`${key}: ${players[key]}`);
    }


    function cardSum(cards) {
        let sum = 0;

        for (const card of cards) {
            let cardArr = card.split('');
            let cardType = cardArr.splice(-1).toString();
            let cardPower = cardArr.join('');

            if (cardPower === ' J') {
                cardPower = 11;
            } else if (cardPower === ' Q') {
                cardPower = 12;
            } else if (cardPower === ' K') {
                cardPower = 13;
            } else if (cardPower === ' A') {
                cardPower = 14;
            }

            if (cardType === 'S') {
                cardType = 4;
            } else if (cardType === 'H') {
                cardType = 3;
            } else if (cardType === 'D') {
                cardType = 2;
            } else if (cardType === 'C') {
                cardType = 1;
            }

            let cardSum = Number(cardType) * Number(cardPower);

            sum += cardSum;
        }

        return sum;
    }
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);