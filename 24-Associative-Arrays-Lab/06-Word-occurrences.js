function wordOccur(input) {
    const words = {};

    for (const currWord of input) {
        if (!words.hasOwnProperty(currWord)) {
            words[currWord] = 1;
        } else {
            words[currWord] += 1;
        }
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccur(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence",
"And", "finally", "the", "third", "sentence"]);