function ladyBugsField(input) {
    let field = [];
    field.length = input[0];
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
        let currentLadybug = ladybugIndex[i];
        field[currentLadybug] = 1;  // Creating an array with positions of the ladybugs inside of it;
        for (let empty = 0; empty < field.length; empty++) {
            if (field[empty] !== 1) {
                field[empty] = 0;
            }
        }
    }

    for (let j = 0; j < commandsArray.length; j++) {
        let currentCommand = commandsArray[j].split(' ');
        let flyDirection = currentCommand[1];
        isFlying = true;
        if (flyDirection === 'right') {
            while (isFlying) {
                let flyingLadybug = currentCommand[0];
                let flyingSpaces = currentCommand[2];
                let landingPosition = Number(flyingLadybug) + Number(flyingSpaces);
                field[flyingLadybug] = 0;
                let fly = true;
                while (fly) {
                    if (landingPosition > field.length - 1) {
                        isFlying = false;
                        break;
                    }

                    let checkIndexForBug = field[landingPosition];
                    if (checkIndexForBug === 0) {
                        field[landingPosition] = 1;
                        isFlying = false;
                        break;
                    }

                    landingPosition += 1;
                }
            }
        } else if (flyDirection === 'left') {
            while (isFlying) {
                let flyingLadybug = currentCommand[0];
                let flyingSpaces = currentCommand[2];
                let landingPosition = Number(flyingLadybug) - Number(flyingSpaces);
                field[flyingLadybug] = 0;
                let fly = true;
                while (fly) {
                    if (landingPosition < 0) {
                        isFlying = false;
                        break;
                    }
                    let checkIndexForBug = field[landingPosition];
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
ladyBugsField([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']);