function fights(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetCount += 1;
        }
        if (i % 3 === 0) {
            swordCount += 1;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCount += 1;
        }
    }
    for (let j = 1; j <= shieldCount; j++) {
        if (j % 2 === 0) {
            armorCount += 1;
        }
    }
    let expenses = helmetPrice * helmetCount + swordPrice * swordCount + shieldPrice * shieldCount + armorPrice * armorCount;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
fights(7,2,3,4,5);