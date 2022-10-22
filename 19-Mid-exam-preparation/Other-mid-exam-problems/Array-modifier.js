function arrayModifier(input) {
    let array = input.shift().split(' ');
    let currentLine = input.shift().split(' ');

    while (currentLine != 'end') {
        let command = currentLine[0];
        let firstIndex = currentLine[1];
        let secondIndex = currentLine[2];

        if (command == 'swap') {
            let firstEl = array[firstIndex];
            let secondEl = array[secondIndex];
            array[firstIndex] = secondEl;
            array[secondIndex] = firstEl;
        } else if (command == 'multiply') {
            let firstEl = array[firstIndex];
            let secondEl = array[secondIndex];
            array[firstIndex] = firstEl * secondEl;
        } else if (command == 'decrease') {
            array = array.map(x => x - 1);
        }

        currentLine = input.shift().split(' ');
    }
    console.log(array.join(', '));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);