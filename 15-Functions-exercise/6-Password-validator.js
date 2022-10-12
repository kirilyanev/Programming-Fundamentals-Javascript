function checkPassword(input) {
    let digitCount = 0;
    let password = input;
    let passwordLength = password.length;
    let inputFail = 0;
    let correctPass = '';

    for (let i = 0; i < password.length; i++) {
        let currentCharNum = password[i].charCodeAt();
        if (currentCharNum >= 48 && currentCharNum <= 57) {
            digitCount += 1;
        }

        if (currentCharNum >= 48 && currentCharNum <= 57 ||
            currentCharNum >= 65 && currentCharNum <= 90 ||
            currentCharNum >= 97 && currentCharNum <= 122) {
            correctPass += password[i];
        }
    }

    if (passwordLength < 6 || passwordLength > 10) {
        inputFail += 1;
        console.log('Password must be between 6 and 10 characters');
    }

    if (password !== correctPass) {
        inputFail += 1;
        console.log('Password must consist only of letters and digits');
    }

    if (digitCount < 2) {
        inputFail += 1;
        console.log('Password must have at least 2 digits');
    }

    if (inputFail === 0) {
        console.log('Password is valid');
    }

    // The length should be 6 - 10 characters (inclusive)   DONE
    // It should consist only of letters and digits   DONE
    // It should have at least 2 digits    DONE
}
checkPassword('MyPass123');