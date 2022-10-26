function DNA(number) {
    const sequence = 'ATCGTTAGGG';
    let firstIndex = 0;
    let secondIndex = 1;
    let currentPrint = 0;

    while (currentPrint !== number) {

        console.log(`**${sequence[firstIndex]}${sequence[secondIndex]}**`);
        currentPrint++
        firstIndex += 2; // 2
        secondIndex += 2; // 3

        if (firstIndex === 10 && secondIndex === 11) {
            firstIndex = 0;
            secondIndex = 1;
        }

        if (currentPrint === number) {
            break;
        }

        console.log(`*${sequence[firstIndex]}--${sequence[secondIndex]}*`);
        currentPrint++
        firstIndex += 2; // 4
        secondIndex += 2; // 5

        if (firstIndex === 10 && secondIndex === 11) {
            firstIndex = 0;
            secondIndex = 1;
        }

        if (currentPrint === number) {
            break;
        }

        console.log(`${sequence[firstIndex]}----${sequence[secondIndex]}`);
        currentPrint++
        firstIndex += 2; // 6
        secondIndex += 2; // 7

        if (firstIndex === 10 && secondIndex === 11) {
            firstIndex = 0;
            secondIndex = 1;
        }

        if (currentPrint === number) {
            break;
        }

        console.log(`*${sequence[firstIndex]}--${sequence[secondIndex]}*`);
        currentPrint++
        firstIndex += 2; // 8
        secondIndex += 2; // 9

        if (firstIndex === 10 && secondIndex === 11) {
            firstIndex = 0;
            secondIndex = 1;
        }

        if (currentPrint === number) {
            break;
        }

    }
}
DNA(4);