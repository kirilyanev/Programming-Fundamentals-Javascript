function carWash(commands) {
    let cleaningValue = 0;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        switch (currentCommand) {
            case 'soap':
                cleaningValue += 10;
                break;
            case 'water':
                cleaningValue += cleaningValue * 0.2;
                break;
            case 'vacuum cleaner':
                cleaningValue += cleaningValue * 0.25;
                break;
            case 'mud':
                cleaningValue -= cleaningValue * 0.10;
                break;
        }
    }
    console.log(`The car is ${cleaningValue.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);