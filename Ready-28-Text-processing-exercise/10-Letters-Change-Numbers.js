function sumLetters(input) {
    let sum = 0;
    let pattern = /[A-Za-z][\d]+[A-Za-z]/gm;
    
    const charIndex = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    }

    const matches = input.match(pattern);

    for (const match of matches) {
        let firstChar = match[0];
        let lastChar = match[match.length - 1];
        let numbers = Number(match.substring(1, match.length - 1));
        let result = 0;


        if (firstChar === firstChar.toLowerCase()) {   // lower case - a
            let charTodigit = charIndex[firstChar.toUpperCase()];
            result = charTodigit * numbers;
        } else if (firstChar === firstChar.toUpperCase()) {  // upper case - A
            let charTodigit = charIndex[firstChar];
            result = numbers / charTodigit;
        }

        if (lastChar === lastChar.toLowerCase()) {   // lower case - a
            let charTodigit = charIndex[lastChar.toUpperCase()];
            result += charTodigit;
        } else if (lastChar === lastChar.toUpperCase()) {  // upper case - A
            let charTodigit = charIndex[lastChar];
            result -= charTodigit;
        }

        sum += result;
    }

    console.log(sum.toFixed(2));
}
sumLetters('A12b s17G');
sumLetters('P34562Z q2576f   H456z');
sumLetters('a1A');