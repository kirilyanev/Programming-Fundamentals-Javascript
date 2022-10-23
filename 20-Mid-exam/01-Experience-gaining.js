function experience(input) {
    const neededXp = input.shift();
    const totalBattles = input.shift();
    let gainedXp = 0;
    let battleCount = 0;
    let currentBattleXp = 0;

    for (let i = 0; i < totalBattles; i++) {
        battleCount++;

        if (battleCount % 3 === 0 && battleCount % 5 !== 0) {
            currentBattleXp = Number(input.shift());
            currentBattleXp *= 1.15;
            gainedXp += currentBattleXp;
        } else if (battleCount % 3 !== 0 && battleCount % 5 === 0) {
            currentBattleXp = Number(input.shift());
            currentBattleXp *= 0.9;
            gainedXp += currentBattleXp;
        } else if (battleCount % 3 === 0 && battleCount % 5 === 0) {
            currentBattleXp = Number(input.shift());
            currentBattleXp *= 1.05;
            gainedXp += currentBattleXp;
        } else {
            currentBattleXp = Number(input.shift());
            gainedXp += currentBattleXp;
        }

        if (gainedXp >= neededXp) {
            return console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
        }
    }

    let moreExperienceNeeded = neededXp - gainedXp;
    
    console.log(`Player was not able to collect the needed experience, ${moreExperienceNeeded.toFixed(2)} more needed.`);
}
experience([400,
    5,
    50,
    100,
    200,
    100,
    20])