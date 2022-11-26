function codeDecription(input) {
    let encryptedMessage = input.shift();
    let currLine = input.shift();

    while (currLine !== 'Decode') {
        let [instruction, firstArg, secondArg] = currLine.split('|');
        switch (instruction) {
            case 'Move':
                let numOfLetters = firstArg;
                let endSubstring = encryptedMessage.substring(0, numOfLetters);
                let remainingString = encryptedMessage.substring(numOfLetters);

                encryptedMessage = remainingString.concat(endSubstring);

                break;

            case 'Insert':
                let index = Number(firstArg);
                let value = secondArg;

                encryptedMessage = encryptedMessage.split('');
                encryptedMessage.splice(index, 0, value);
                encryptedMessage = encryptedMessage.join('');

                break;

            case 'ChangeAll':
                let substring = firstArg;
                let replacement = secondArg;
                
                while (encryptedMessage.includes(substring)) {
                    encryptedMessage = encryptedMessage.replace(substring, replacement);
                }
                
                break;
        }

        currLine = input.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}
codeDecription([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);

    codeDecription(['zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode'])