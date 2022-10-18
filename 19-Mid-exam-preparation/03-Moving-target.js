function shootingGallery(input) {
    let targets = input.shift().split(' ').map(Number);
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let currentCommand = input[i].split(' ');
        let command = currentCommand[0];
        let index = currentCommand[1];
        let value = currentCommand[2];

        if (command === 'Shoot') {
            if (targets.length >= index) {
                targets[index] -= value;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (command === 'Add') {
            if (targets.length >= index) {
                targets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            let radius = value * 2 + 1;
            let startingIndex = index - value;

            if (targets.length >= startingIndex && startingIndex > 0) {
                targets.splice(startingIndex, radius);
            } else {
                console.log('Strike missed!');
            }
        } else if (command === 'End') {
            console.log(targets.join('|'));
            break;
        }
    }
}
shootingGallery(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);