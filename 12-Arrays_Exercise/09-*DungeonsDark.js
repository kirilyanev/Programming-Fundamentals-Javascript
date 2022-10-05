function dungeon(input) {
    let inputString = input.toString();
    let allRooms = inputString.split('|');
    let health = 100;
    let collectedCoins = 0;
    let isDead = false;

    for (let i = 0; i < allRooms.length; i++) {
        let bestRoom = i + 1;
        let currentRoom = allRooms[i];
        let itemOrMonsterAndNum = currentRoom.split(' ');
        if (itemOrMonsterAndNum[0] === 'potion') {
            let healing = Number(itemOrMonsterAndNum[1]);
            health += healing;
            if (health > 100) {
                healing = 100 - (health - healing);
                health = 100;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonsterAndNum[0] === 'chest') {
            let coins = Number(itemOrMonsterAndNum[1]);
            collectedCoins += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            let monsterName = itemOrMonsterAndNum[0];
            let monsterAttack = itemOrMonsterAndNum[1];
            health -= Number(monsterAttack);
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                isDead = true;
                break;
            }
        }
    }
    if (isDead === false) {
        console.log(`You've made it!\nCoins: ${collectedCoins}\nHealth: ${health}`);
    }
}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);