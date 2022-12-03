function wordMatch(word, string) {
    const text = string.split(' ');

    for (const currWord of text) {
        if (currWord.toLowerCase() === word.toLowerCase()) {
            return console.log(word);
        }
    }

    console.log(`${word} not found!`);
}
wordMatch('javascript',
    'JavaScript is the best programming language')