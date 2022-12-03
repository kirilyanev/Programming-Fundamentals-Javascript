function hashTagWords(string) {
    const text = string.split(' ');

    for (const word of text) {
        const isValidWord = word.startsWith('#') && word.length > 1;

        if (isValidWord) {
            let isLetter = true;
            let wordCheck = '';

            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();

                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCheck += word[index];
                }
            }

            if (isLetter) {
                console.log(wordCheck);
            }
        }
    }
}
hashTagWords('Nowadays everyone uses # to tag a #special word in #socialMedia');