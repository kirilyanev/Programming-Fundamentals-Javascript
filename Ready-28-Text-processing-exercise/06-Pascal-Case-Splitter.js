function wordSplitter(string) {
    // My first solution 80/100 in judge

    // let words = [];
    // let startIndex = 0;

    // for (let index = 1; index < string.length; index++) {
    //     if (string[index].charCodeAt() >= 65 && string[index].charCodeAt() <= 90) {
    //         let lastIndex = index;
    //         let word = string.substring(startIndex, lastIndex);
    //         words.push(word);
    //         startIndex = lastIndex;
    //     } else if (index === string.length - 1) {
    //         let last = string.substring(startIndex);
    //         words.push(last);
    //     }
    // }

    // console.log(words.join(', '));

    // Second solution
    let result = string[0];
    let lower = string.toLowerCase();

    for (let index = 1; index < string.length; index++) {
        if (string[index] !== lower[index]) {
            result += ', ';
        }

        result += string[index];
    }

    console.log(result);
}
wordSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');