function ladybug(input) {
    let field = [];
    field.length = input[0];
    field.fill(0);
    let initialLadybugs = input[1].split(' ');
    let commands = [];
    let flylength = 0;
    let bugFlying = false;

    for (let i = 0; i < initialLadybugs.length; i++) {
        let bugIndex = initialLadybugs[i];
        if (bugIndex >= 0 && bugIndex <= field.length - 1) {
            field[bugIndex] = 1;  // fills field with bugs initial positions
        }
    }

    for (let j = 2; j < input.length; j++) {
        commands.push(input[j]);  // getting array with commands
    }

    // Bugs start flying
    for (let k = 0; k < commands.length; k++) {
        let currentCommand = commands[k].split(' ');  // array of current command
        if (field[currentCommand[0]] === 1) {
            bugFlying = true;
        }
        
        while (bugFlying) {
            let bug = currentCommand[0];
            let course = currentCommand[1];
            flylength = currentCommand[2];
            let landingIndex = 0;
            let isIndexFree = false;

            if (bug < 0 || bug > field.length) { // checks bug position before starting to fly 
                bugFlying = false;
                break;
            }

            if (bug >= 0 && bug < field.length) {
                if (flylength != 0) {
                    field[bug] = 0;  // bug start flying and leaves its position to 0
                }
            }

            if (flylength < 0) {
                if (course === 'right') {
                    course = 'left';
                    flylength = Math.abs(flylength);
                } else if (course === 'left') {
                    course = 'right';
                    flylength = Math.abs(flylength);
                }
            }

            if (course === 'right') {
                landingIndex = Number(bug) + Number(flylength);  // landing position
            } else if (course === 'left') {
                landingIndex = Math.abs(Number(bug) - Number(flylength));
            }

            while (isIndexFree === false && landingIndex < field.length) {
                if (field[landingIndex] === 0) {
                    field[landingIndex] = 1;
                    isIndexFree = true;
                    break;
                } else {
                    if (course === 'right') {
                        landingIndex++
                    } else if (course === 'left') {
                        landingIndex--
                    }
                }
            }
            bugFlying = false;
        }
    }
    console.log(field.join(' '));
}
ladybug([5, '-11', '3 left 2', '1 left -2']);