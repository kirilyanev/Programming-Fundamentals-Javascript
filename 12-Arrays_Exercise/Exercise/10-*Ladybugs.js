function ladyBugsField(input) {
    let field = [];
    field.length = input[0];
    field.fill(0);
    let ladybugIndex = input[1].split(' '); // Takes second input and makes it to an array;
    let ladybugCount = ladybugIndex.length; // Stores the initial amount of ladybugs;
    let commandsArray = []; // An empty array to store the commands;
    let isFlying = true;
    let bugFlyAway = false;

    // for-cycle to save the commands in the 'commandArray';
    for (let c = 2; c < input.length; c++) {
        commandsArray.push(input[c]);
    }

    for (let i = 0; i < ladybugCount; i++) {
        let currentLadybugIndex = ladybugIndex[i];
        if (currentLadybugIndex < field.length) {
            field[currentLadybugIndex] = 1;  // Creating an array with positions of the ladybugs inside of it;
        }
    }

    for (let j = 0; j < commandsArray.length; j++) {    // Breaks down the command string to an array
        let currentCommand = commandsArray[j].split(' ');
        let flyDirection = currentCommand[1];
        isFlying = true;
        if (flyDirection === 'right') {  // Check situation when command is 'right'
            if (currentCommand[2] < 0) {
                flyDirection = 'left';
            }
            while (isFlying) {
                let flyingLadybug = currentCommand[0]; // Initial position of the flying bug
                let Moves = currentCommand[2]; // Spaces flying to right of initial position
                let landingPosition = Number(flyingLadybug) + Number(Moves); // The position where it has to land(if no ladyBug there)
                field[flyingLadybug] = 0;
                let fly = true;
                while (fly) {
                    if (landingPosition > field.length - 1) {  // Check if ladyBug flies away
                        isFlying = false;
                        break;
                    }

                    let checkIndexForBug = field[landingPosition]; // Check if position is free for landing
                    if (checkIndexForBug === 0) {
                        field[landingPosition] = 1;
                        isFlying = false;
                        break;
                    }

                    landingPosition += 1;
                }
            }
        } else if (flyDirection === 'left') {  // Check situation when command is 'left'
            if (currentCommand > 0) {
                flyDirection = 'right';
            }
            while (isFlying) {
                let flyingLadybug = currentCommand[0]; // Initial position of the flying bug
                let Moves = currentCommand[2]; // Spaces flying to right of initial position
                let landingPosition = Number(flyingLadybug) - Number(Moves); // The position where it has to land(if no ladyBug there)
                field[flyingLadybug] = 0;
                let fly = true;
                while (fly) {
                    if (landingPosition < 0) { // Check if ladyBug flies away
                        isFlying = false;
                        break;
                    }
                    let checkIndexForBug = field[landingPosition]; // Check if position is free for landing
                    if (checkIndexForBug === 0) {
                        field[landingPosition] = 1;
                        isFlying = false;
                        break;
                    }

                    landingPosition += 1;
                }
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugsField([ 3, '0 1','0 right -1','2 right 1' ]);