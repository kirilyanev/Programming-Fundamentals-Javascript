function memoryGame(input) {
    let sequence = input[0].split(' ');
    let index = 1;
    let currentGuess = input[index].split(' ');
    let movesCount = 0;

    while (currentGuess != 'end') {
        movesCount++;

        let firstElement = Number(currentGuess[0]);
        let secondElement = Number(currentGuess[1]);

        if (firstElement === secondElement || !sequence[firstElement] || !sequence[secondElement]) {
            let middleSequnce = Math.floor(sequence.length / 2);
            let elementsToAdd = `-${movesCount}a`;

            sequence.splice(middleSequnce, 0, elementsToAdd, elementsToAdd);

            console.log('Invalid input! Adding additional elements to the board');

        } else if (sequence[firstElement] === sequence[secondElement]) {
            let removedElement = sequence[firstElement];

            sequence.splice(Math.max(firstElement, secondElement), 1);
            sequence.splice(Math.min(firstElement, secondElement), 1);

            console.log(`Congrats! You have found matching elements - ${removedElement}!`);

            if (sequence.length == 0) {
                return console.log(`You have won in ${movesCount} turns!`);
            }

        } else if (sequence[firstElement] !== sequence[secondElement]) {
            console.log('Try again!');
        }

        index++;
        currentGuess = input[index].split(' ');
    }

    return console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);