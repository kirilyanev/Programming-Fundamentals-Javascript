function printElements(input) {
    let elements = [];
    let step = Number(input[input.length - 1]);
    for (let i = 0; i < input.length - 1; i += step) {
        let currentElement = input[i];
        elements.push(currentElement);
    }
    console.log(elements.join(' '));
}
printElements(['1', '2', '3', '4', '5', '6']);