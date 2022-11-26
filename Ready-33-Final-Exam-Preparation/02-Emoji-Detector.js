function emojiDetector(input) {
    let text = input.join()

    let patternEmoji = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/gm
    let tresholdPattern = /\d/gm;

    const coolTresholdNumbers = text.match(tresholdPattern).join('');
    let coolTreshold = 1;

    for (const num of coolTresholdNumbers) {
        coolTreshold *= Number(num);
    }

    const validEmojis = text.match(patternEmoji);
    let coolEmojis = [];

    for (const validEmoji of validEmojis) {
        let currEmoji = validEmoji.substring(2, validEmoji.length - 2);
        let emojiSum = 0;

        for (const char of currEmoji) {
            let charSum = char.charCodeAt();
            emojiSum += charSum;
        }

        if (emojiSum > coolTreshold) {
            coolEmojis.push(validEmoji);
        }
    }

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);

    for (const emoji of coolEmojis) {
        console.log(emoji);
    }
}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);