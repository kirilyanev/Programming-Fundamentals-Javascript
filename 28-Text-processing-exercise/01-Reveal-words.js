function wordReveal(words, text) {
    let wordsArr = words.split(', ');

    wordsArr.forEach(word => {
        const match = `${'*'.repeat(word.length)}`;
        text = text.replace(match, word);
    });

    console.log(text);
}

wordReveal('great, learning',
    'softuni is ***** place for ******** new programming languages');