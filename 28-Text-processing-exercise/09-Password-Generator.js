function passwordGenerator(strings) {
    let password = strings[0] + strings[1];
    let reg = /[aeiou]/gm;
    let vowels = password.match(reg);
    let replacingChars = [];

    const thirdString = strings[2]
    const thirdStrLength = thirdString.length;

    let index = 0;
    for (let i = 0; i < vowels.length; i++) {
        let currChar = thirdString[index];
        replacingChars.push(currChar);

        index += 1;
        if (index === thirdStrLength) {
            index = 0;
        }
    }

    password = password.replace(reg, '-').split('');

    index = 0;
    for (let j = 0; j < password.length; j++) {
        let currChar = password[j];
        if (currChar === '-') {
            password[j] = thirdString[index].toUpperCase();
            index += 1;
        }
        if (index === thirdString.length) {
            index = 0;
        }
    }

    const generatedPassword = password.reverse().join('');

    console.log(`Your generated password is ${generatedPassword}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);