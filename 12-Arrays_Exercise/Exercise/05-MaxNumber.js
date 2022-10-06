function topInteger(input) {
    let finalArray = [];

    for (let i = 0; i < input.length; i++) {
        let isBigger = true;
        let currentNum = input[i];

        for (let k = i + 1; k < input.length; k++) {
            if (currentNum <= input[k]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            finalArray.push(currentNum);
        }
    }
    console.log(finalArray.join(' '));
}
topInteger([41, 41, 34, 20]);