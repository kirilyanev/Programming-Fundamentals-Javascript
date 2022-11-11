function stringOccur(textInput, wordInput) {
    let text = textInput.split(' ');
    let counter = 0;

    for (const word of text) {
        if (word === wordInput) {
            counter++;
        }
    }

    console.log(counter);
}

stringOccur('This is a word and it also is a sentence',
    'is');

stringOccur('softuni is great place for learning new programming languages',
    'softuni');