// Not working solutions are commented

// function ladyBugsField(input) {
//     let field = [];
//     field.length = input[0];
//     field.fill(0);
//     let ladybugIndex = input[1].split(' '); // Takes second input and makes it to an array;
//     let ladybugCount = ladybugIndex.length; // Stores the initial amount of ladybugs;
//     let commandsArray = []; // An empty array to store the commands;
//     let isFlying = true;
//     let bugFlyAway = false;

//     // for-cycle to save the commands in the 'commandArray';
//     for (let c = 2; c < input.length; c++) {
//         commandsArray.push(input[c]);
//     }

//     for (let i = 0; i < ladybugCount; i++) {
//         let currentLadybugIndex = ladybugIndex[i];
//         if (currentLadybugIndex < field.length && currentLadybugIndex >= 0) {
//             field[currentLadybugIndex] = 1;  // Creating an array with positions of the ladybugs inside of it;
//         }
//     }

//     for (let j = 0; j < commandsArray.length; j++) {    // Breaks down the command string to an array
//         let currentCommand = commandsArray[j].split(' ');
//         let flyDirection = currentCommand[1];
//         isFlying = true;
//         if (flyDirection === 'right') {  // Check situation when command is 'right'
//             if (currentCommand[2] < 0) {
//                 flyDirection = 'left';
//             }
//             while (isFlying) {
//                 let flyingLadybug = currentCommand[0]; // Initial position of the flying bug
//                 let Moves = currentCommand[2]; // Spaces flying to right of initial position
//                 let landingPosition = Number(flyingLadybug) + Number(Moves); // The position where it has to land(if no ladyBug there)
//                 field[flyingLadybug] = 0;
//                 let fly = true;
//                 while (fly) {
//                     if (landingPosition < 0 || landingPosition > field.length - 1) {  // Check if ladyBug flies away
//                         isFlying = false;
//                         break;
//                     }

//                     let checkIndexForBug = field[landingPosition]; // Check if position is free for landing
//                     if (checkIndexForBug === 0) {
//                         field[landingPosition] = 1;
//                         isFlying = false;
//                         break;
//                     }

//                     landingPosition += 1;
//                 }
//             }
//         } else if (flyDirection === 'left') {  // Check situation when command is 'left'
//             if (currentCommand > 0) {
//                 flyDirection = 'right';
//             }
//             while (isFlying) {
//                 let flyingLadybug = currentCommand[0]; // Initial position of the flying bug
//                 let Moves = currentCommand[2]; // Spaces flying to right of initial position
//                 let landingPosition = Number(flyingLadybug) - Number(Moves); // The position where it has to land(if no ladyBug there)
//                 field[flyingLadybug] = 0;
//                 let fly = true;
//                 while (fly) {
//                     if (landingPosition < 0 || landingPosition > field.length - 1) { // Check if ladyBug flies away
//                         isFlying = false;
//                         break;
//                     }
//                     let checkIndexForBug = field[landingPosition]; // Check if position is free for landing
//                     if (checkIndexForBug === 0) {
//                         field[landingPosition] = 1;
//                         isFlying = false;
//                         break;
//                     }

//                     landingPosition += 1;
//                 }
//             }
//         }
//     }
//     console.log(field.join(' '));
// }
// // ladyBugsField([ 3, '0 1','0 right 1','2 right 1' ]);
// ladyBugsField([ 5, '3','3 left 2','1 left -2']);





// Working solution, but from Softuni forum - pastebin:

// function ladybugsFly(input) {
//     let fieldSize = input.shift()
//     let bugsIndex = input.shift().split(' ').map(x => Number(x));
//     let field = new Array(fieldSize).fill(0);
//     const commands = [];

//     for (let i = 0; i < bugsIndex.length; i++) {  // change all indexes that contain bugs to 1;
//         let currentBug = bugsIndex[i];

//         if (currentBug < 0 || currentBug > field.length) {
//             continue
//         }

//         field[currentBug] = 1;
//     }

//     for (const line of input) { // push commands to array
//         commands.push(line);
//     }

//     for (let i = 0; i < commands.length; i++) { // for loop through the commands array
//         let [bugIndex, flydirection, flyingspaces] = commands[i].split(' ');
//         bugIndex = Number(bugIndex);
//         flyingspaces = Number(flyingspaces);

//         if(bugIndex < 0 || bugIndex > field.length || field[bugIndex] !== 1){
//             continue
//         }


//         field[bugIndex] = 0;

//         if (flydirection === 'left') {
//             flyingspaces = -flyingspaces;
//         }

//         bugIndex += flyingspaces;

//         while (bugIndex >= 0 && bugIndex < field.length) {
//             if (field[bugIndex] === 0) {
//                 field[bugIndex] = 1;
//                 break;
//             }

//             bugIndex += flyingspaces;
//         }        
//     }

//     console.log(field.join(' '));
// }


// My solution - working 100/100

function ladybugsFly(input) {
    let field = [];
    const commands = [];
    field.length = input.shift();
    field.fill('0');

    let bugsIndex = input.shift().split(' ').map(x => Number(x));

    for (let i = 0; i < bugsIndex.length; i++) {  // change all indexes that contain bugs to 1;
        let currentBug = bugsIndex[i];

        if (field[currentBug]) {
            field[currentBug] = '1';
        }
    }

    for (const line of input) { // push commands to array
        commands.push(line);
    }

    for (let i = 0; i < commands.length; i++) { // for loop through the commands array
        let [bug, flydirection, flyingspaces] = commands[i].split(' ');
        bug = Number(bug);
        flyingspaces = Number(flyingspaces);
        

        if (flydirection === 'left') {
            flyingspaces = -flyingspaces;
        }
        let landingIndex = bug + (flyingspaces);

        if (flydirection === 'right' && field[bug] == '1') {   // check if conditions are met
            field[bug] = '0';

            while (field[landingIndex]) {       // while in range of field, checks landing positions
                if (field[landingIndex] === '0') {
                    field[landingIndex] = '1'
                    break;
                } else if (field[landingIndex] === '1') {
                    landingIndex += flyingspaces
                }
            }
        } else if (flydirection === 'left' && field[bug] == '1') {   // check if conditions are met
            field[bug] = '0';

            while (field[landingIndex]) {       // while in range of field, checks landing positions
                if (field[landingIndex] === '0') {
                    field[landingIndex] = '1';
                    break;
                } else if (field[landingIndex] === '1') {
                    landingIndex += flyingspaces;
                }
            }
        }
    }

    console.log(field.join(' '));
}

ladybugsFly([5, '3',
    '3 left 2',
    '1 left -2']);