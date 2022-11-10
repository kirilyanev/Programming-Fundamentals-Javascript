function censored(text, word) {
    let censored = text;

    while (censored.includes(word)) {
       censored = censored.replace(word, '*'.repeat(word.length));
    }
    
    console.log(censored);
}

censored('Find the hidden word', 'hidden');