function tseamAccount(input) {
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let accountAction = input[i].split(' ');
        let command = accountAction[0];
        let newGame = accountAction[1];

        if (command === 'Play!') {
            break;

        } else if (command === 'Install' && games.includes(newGame) === false) {
            games.push(newGame);

        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);

        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];

            if (games.includes(game)) {
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expansion.join(':'));
            }
        }
    }
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!']);