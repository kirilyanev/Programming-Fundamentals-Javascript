function tseamAccount(input) {
    let games = input[0].split(' ');
    let isCommandGood;

    for (let i = 1; i < input.length; i++) {
        let accountAction = input[i].split(' ');
        let command = accountAction[0];
        let newGame = accountAction[1];

        if (command === 'Play!') {
            break;
        } else if (command === 'Install') {
            isCommandGood = true;
            for (let j = 0; j < games.length; j++) {
                if (games[j] === newGame) {
                    isCommandGood = false;
                    break;
                }
            }

            if(isCommandGood = true) {
                games.push(newGame);
            }

        } else if (command === 'Uninstall') {
            for (let j = 0; j < games.length; j++) {
                if (games[j] === newGame) {
                    games.splice(j, 1);
                    break;
                }
            }
        } else if (command === 'Update') {
            for (let k = 0; k < games.length; k++) {
                if (games[k] === newGame) {
                    games.splice(k, 1);
                    games.push(newGame);
                    break;
                }
            }
        } else if (command === 'Expansion') {
            let expansion = command.split(' ');
            let game = expansion[0];

            for (let l = 0; l < games.length; l++) {
                if (games[l] === game) {
                    let expandedGame = expansion.join(':');
                    games.splice(l + 1, 0, expandedGame)
                    break;
                }
            }
        }
    }

    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);