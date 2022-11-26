function activationKeys(input) {
    let rawKey = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'Generate') {

        if (currentCommand.includes('Contains')) {

            let substring = currentCommand.split('>>>')[1];

            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }

        } else if (currentCommand.includes('Flip')) {

            let [command, upperOrLower, startIndex, endIndex] = currentCommand.split('>>>');
            let substring = rawKey.substring(startIndex, endIndex);

            if (upperOrLower === 'Upper') {
                let newsSubstring = substring.toUpperCase();
                rawKey = rawKey.replace(substring, newsSubstring);
            } else if (upperOrLower === 'Lower') {
                let newsSubstring = substring.toLowerCase();
                rawKey = rawKey.replace(substring, newsSubstring);
            }

            console.log(rawKey);

        } else if (currentCommand.includes('Slice')) {

            let [command, startIndex, endIndex] = currentCommand.split('>>>');

            deleteSubstring = rawKey.slice(startIndex, endIndex)
            rawKey = rawKey.replace(deleteSubstring, '');

            console.log(rawKey);
        }

        currentCommand = input.shift();
    }

    console.log(`Your activation key is: ${rawKey}`);
}

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);