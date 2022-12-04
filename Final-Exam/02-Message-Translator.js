function translate(input) {
    const messageCount = Number(input.shift());
    const validPattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/gm;

    for (let i = 0; i < messageCount; i++) {
        let message = input[i];
        let match = validPattern.exec(message);

        if (match) {
            let string = match.groups.string.split('');
            let result = '';

            for (const char of string) {
                result += `${char.charCodeAt()} `;
            }

            console.log(`${match.groups.command}: ${result.trim()}`);
            
        } else {
            console.log('The message is invalid');
        }
    }
}
// translate(["2",
// "!Send!:[IvanisHere]",
// "*Time@:[Itis5amAlready"]);
translate(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]);