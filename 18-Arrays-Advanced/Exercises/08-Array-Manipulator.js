function manipulateArray(arrayInput, commandsInput) {
    let array = arrayInput.slice();
    let commands = commandsInput.slice();
    let currLine = commands.shift().split(' ');
    
    while(currLine[0] !== 'print') {
        let command = currLine.shift();

        switch (command) {
            case 'add': {
                let index = currLine[0];
                let element = currLine[1];

                array.splice(index, 0, Number(element));
                break;
            }
            case 'addMany': {
                // let index = currLine.shift();
                // let elements = currLine.join();

                // array.splice(index, 0, elements);
                // array = array.join().split(',');
                // break;
                let newArray = currLine.slice(1).map(Number);
                array.splice(Number(currLine[0]), 0, ...newArray);
                break;
            }
            case 'contains': {
                let element = Number(currLine.shift());

                console.log(array.indexOf(element));
                break;
            }
            case 'remove': {
                let index = currLine.shift();

                array.splice(index, 1);
                break;
            }
            case 'shift': {
                // let positions = currLine.shift();
                // let shiftedElArr = array.splice(0, positions);
                // let elToPush = shiftedElArr.join()

                // array.push(elToPush);
                // array = array.join().split(',');
                let positions = currLine.shift();

                for (let i = 0; i < positions; i++) {
                    let firstEl = array.shift();
                    array.push(firstEl);
                }
                break;
            }
            case 'sumPairs': {
                let newArr = [];

                for (let i = 0; i < array.length; i += 2) {
                    currElement = Number(array[i]);
                    nextElement = Number(array[i + 1]);

                    if (nextElement) {
                        let sumPairs = currElement + nextElement;
                        newArr.push(sumPairs);
                    } else {
                        newArr.push(currElement);
                    }
                }

                // let newArr = array.reduce(function(total,el,index) {
                //     if (index % 2 == 0) {
                //         total.push(Number(array[index]) + (Number(array[index + 1] || 0)));
                //     }
                //     return total;
                // })                
                array = newArr;
                break;
            }  
        }

        currLine = commands.shift().split(' ');
    }

    // let result = '';

        // for (let i = 0; i < array.length; i++) {

        //     let element = array[i].toString();

        //     if (i == array.length - 1) {
        //         result += element;
        //     } else {
        //         result += element + ', ';
        //     }
        // }

    console.log('[ ' + array.join(', ') + ' ]');
}
// manipulateArray([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);
manipulateArray([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// manipulateArray([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
//manipulateArray([1, 2, 4, 5, 6, 7], ["contains 1", 'shift 3', "print"]);
//manipulateArray([1, 2], ['shift 2', 'print']);