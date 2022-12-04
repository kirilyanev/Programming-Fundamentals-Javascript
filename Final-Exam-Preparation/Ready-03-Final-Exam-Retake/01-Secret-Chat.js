function revealMessage(input) {
    let concealedMessage = input.shift();

    let currLine = input.shift();

    while (currLine !== 'Reveal') {
        let [command, argOne, argTwo] = currLine.split(':|:');

        switch (command) {
            case 'InsertSpace':
                let index = Number(argOne);
                let subStringStart = concealedMessage.substring(0, index);
                let subStringEnd = concealedMessage.substring(index);

                concealedMessage = subStringStart + ' ' + subStringEnd;

                console.log(concealedMessage);

                break;

            case 'Reverse':
                let substring = argOne;

                if (concealedMessage.includes(substring)) {

                    let reversedString = substring.split('')
                        .reverse()
                        .join('')

                    concealedMessage = concealedMessage.replace(substring,'');
                    concealedMessage = concealedMessage + reversedString;

                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }

                break;

            case 'ChangeAll':
                let changeSubstring = argOne;
                let replacement = argTwo;

                while (concealedMessage.includes(changeSubstring)) {
                    concealedMessage = concealedMessage.replace(changeSubstring, replacement);
                }

                console.log(concealedMessage);

                break;
        }

        currLine = input.shift();
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
revealMessage([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:13',
    'Reveal']);

// revealMessage([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:wa',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
//   ]);