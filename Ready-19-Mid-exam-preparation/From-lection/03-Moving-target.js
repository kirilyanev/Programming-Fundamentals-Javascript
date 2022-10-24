function shootingGallery(input) {
    let targets = input.shift().split(' ').map(Number);
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let currentCommand = input[i].split(' ');
        let command = currentCommand[0];
        let index = Number(currentCommand[1]);
        let value = Number(currentCommand[2]);

        if (command === 'Shoot') {
            // if (targets[index])  ---> if index is in range of targets --> True
            if (targets[index]) {
                targets[index] -= value;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (command === 'Add') {
            if (targets[index]) {
                targets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            // let radius = value;
            // let firstPart = targets.slice(0, index - radius);
            // let secondPart = targets.slice(index + radius);
            // let targets = firstPart.concat(secondPart);
            let radius = value * 2 + 1;
            let startingIndex = index - value;
            let finalIndex = index + value;

            // if (targets.length >= startingIndex && startingIndex > 0)
            if (targets[startingIndex] && targets[finalIndex]) {
                targets.splice(startingIndex, radius);
            } else {
                console.log('Strike missed!');
            }
        }

        if (command === 'End') {
            console.log(targets.join('|'));
            break;
        }
    }
}
shootingGallery(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);