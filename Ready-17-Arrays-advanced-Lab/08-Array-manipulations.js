// function arrayManipulation(input) {
//     let array = input[0].split(' ');

//     for (let i = 1; i < input.length; i++) {
//         let currentCommand = input[i].split(' ');
//         if (currentCommand[0] === 'Add') {
//             array.push(currentCommand[1]);
//         } else if (currentCommand[0] === 'Remove') {
//             for (let j = 0; j < array.length; j++) {
//                 if (currentCommand[1] === array[j]) {
//                     array.splice(j, 1)
//                 }
//             }
//         } else if (currentCommand[0] === 'RemoveAt') {
//             array.splice(currentCommand[1], 1);
//         } else if (currentCommand[0] === 'Insert') {
//             array.splice(currentCommand[2], 0, currentCommand[1]);
//         }
//     }
//     console.log(array.join(' '));
// }
// arrayManipulation(['6 12 2 65 6 42',
//     'Add 8',
//     'Remove 12',
//     'RemoveAt 3',
//     'Insert 6 2']);


// Second solution with help of the hints in the exercise
function solve(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    function add(el) {
        arr.push(el);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }
    console.log(arr.join(' '));
}

solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);