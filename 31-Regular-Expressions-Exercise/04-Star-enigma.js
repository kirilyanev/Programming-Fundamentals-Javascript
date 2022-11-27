function decrypt(messages) {
    const messagesCount = messages.shift();
    const characters = 'star';
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < messagesCount; i++) {
        let message = messages.shift()
        let messageDecryption = message.toLowerCase().split('');

        let decryptionKey = 0;

        for (const char of messageDecryption) {
            if (characters.includes(char)) {
                decryptionKey += 1
            }
        }

        message = message.split('')
            .map(x => String.fromCharCode(x.charCodeAt() - decryptionKey))
            .join('');

        // With separate regex
        // let planetRegex = /@(?<planet>[A-za-z]+)/gm;
        // let populationRegex = /:(?<population>\d+)/gm;
        // let attackRegex = /!(?<attack>[AD])!/gm;
        // let soldierCountRegex = /->(?<soldiers>\d+)/gm;

        // let planet = planetRegex.exec(message);
        // let population = populationRegex.exec(message);
        // let attackType = attackRegex.exec(message);
        // let soldiers = soldierCountRegex.exec(message);

        let regex = /@(?<planet>[A-za-z]+)[^@\-!:>]*:(?<population>\d+)!(?<attack>[AD])!->(?<soldiers>\d+)/gm;
        let result = regex.exec(message)

        //console.log(`${result.groups['planet']} - ${result.groups['population']} - ${result.groups['attack']} - ${result.groups['soldiers']} `);
        if (!result) {
            continue;
        }
        if (result.groups['attack'] === 'A') {
            attackedPlanets.push(result.groups['planet']);
        } else if (result.groups['attack'] === 'D') {
            destroyedPlanets.push(result.groups['planet']);
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => {
        console.log(`-> ${planet}`);
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => {
        console.log(`-> ${planet}`);
    });
}
decrypt(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);

// decrypt(['3',
// "tt(''DGsvywgerx>6444444444%H%1B9444",
// 'GQhrr|A977777(H(TTTT',
// 'EHfsytsnhf?8555&I&2C9555SR']);