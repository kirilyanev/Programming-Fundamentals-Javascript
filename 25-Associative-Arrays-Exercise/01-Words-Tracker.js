function wordTracker(input) {
    const trackWords = input.shift().split(' ');

    const result = {};

    for (const word of trackWords) {
        result[word] = 0;
    }

    for (const word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++
        }
    }

    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);