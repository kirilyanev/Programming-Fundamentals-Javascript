function wordOccur(input) {
    const words = {};

    for (const currWord of input) {
        if (!words[currWord]) {
            words[currWord] = 0;
        }

        words[currWord]++;
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccur(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);