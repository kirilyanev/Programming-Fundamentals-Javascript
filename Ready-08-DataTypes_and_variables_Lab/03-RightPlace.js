function matchingStrings(stringOne,character,stringTwo) {
    let newString = '';
    for(let i = 0; i < stringOne.length; i++) {
        if (stringOne[i] != '_') {
            newString += stringOne[i];
        } else if(stringOne[i] == '_') {
            newString += character;
        }
    }

    if(newString === stringTwo) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

matchingStrings('Str_ng', 'I', 'Strong');
matchingStrings('Str_ng', 'i', 'String');

// function secondSolution(str,char,result) {
//     let res = str.replace('_',char);
//     let output = res === result ? 'Matched' : 'Not Matched';
//     console.log(output);
// }

// secondSolution('Str_ng', 'I', 'Strong');
// secondSolution('Str_ng', 'i', 'String');