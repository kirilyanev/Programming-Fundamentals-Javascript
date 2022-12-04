function decrypt(input) {
    let string = input.shift();

    let currLine = input.shift();

    while (currLine !== 'Finish') {
        let [command, argOne, argTwo] = currLine.split(' ');

        switch (command) {
            case 'Replace': {
                let currChar = argOne;
                let newChar = argTwo;

                while (string.includes(currChar)) {
                    string = string.replace(currChar, newChar);
                }

                console.log(string);

                break;
            }
            case 'Cut': {
                let startIndex = Number(argOne);
                let endIndex = Number(argTwo);

                if (string[startIndex] && string[endIndex]) {

                    //let stringToRemove = string.split('').splice(startIndex,endIndex).join('');
                    let stringToRemove = string.substring(startIndex, endIndex+1);
                    string = string.replace(stringToRemove, '');

                    console.log(string);

                } else {
                    console.log('Invalid indices!');
                }

                break;
            }
            case 'Make': {
                let lowerUpper = argOne;

                if (lowerUpper === 'Upper') {
                    string = string.toUpperCase();
                } else if (lowerUpper === 'Lower') {
                    string = string.toLowerCase();
                }

                console.log(string);

                break;
            }
            case 'Check': {
                let checkString = argOne;

                if (string.includes(checkString)) {
                    console.log(`Message contains ${checkString}`);
                } else {
                    console.log(`Message doesn't contain ${checkString}`);
                }

                break;
            }
            case 'Sum': {
                let startIndex = Number(argOne);
                let endIndex = Number(argTwo);
                let sum = 0;

                if (string[startIndex] && string[endIndex]) {
                    let substring = string.substring(startIndex,endIndex+1).split('');

                    for (const char of substring) {
                        sum += char.charCodeAt();
                    }

                    console.log(sum);

                } else {
                    console.log('Invalid indices!');
                }

                break;
            }
        }

        currLine = input.shift();
    }
}
decrypt(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]);
decrypt(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"]);