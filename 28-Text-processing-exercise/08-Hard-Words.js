function replaceWords(input) {
    let text = input[0].split(' ');
    const words = input[1];

    for (let i = 0; i < text.length; i++) {
        let currString = text[i];
        let replaceWord = '';
        let isMatch = false;
        let isLastCharDiff = false;
        let lastChar = '';

        if (currString.includes('_')) {
            if (currString[currString.length - 1] !== '_') {
                isLastCharDiff = true;
                lastChar = currString[currString.length - 1];

                currString = currString.substring(0, (currString.length - 1));
            }

            for (const word of words) {
                if (word.length === currString.length) {
                    replaceWord = word;
                    isMatch = true;
                }
            }
        }

        if (isMatch) {
            if (isLastCharDiff) {
                replaceWord += lastChar;
                text.splice(i, 1, replaceWord);
            } else {
                text.splice(i, 1, replaceWord);
            }
        }
    }

    console.log(text.join(' '));
}
replaceWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])