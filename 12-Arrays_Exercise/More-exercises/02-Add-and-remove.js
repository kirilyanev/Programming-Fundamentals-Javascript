function addRemove(input) {
    let commands = input;
    let finalArray = [];
    for (let i = 1; i <= commands.length; i++) {
        let currentNumber = i;
        let currentOperation = commands[i - 1];
        if (currentOperation === 'add') {
            finalArray.push(currentNumber);
        } else if (currentOperation === 'remove') {
            finalArray.pop();
        }
    }

    if (finalArray.length !== 0) {
        console.log(finalArray.join(' '));
    } else {
        console.log('Empty');
    }
}
addRemove(['remove', 'remove', 'remove']);