function pig(input) {
    let foodQuantity = Number(input[0]) * 1000;
    let hayQuantity = Number(input[1]) * 1000;
    let coverQuantity = Number(input[2]) * 1000;
    const guineaWeigth = Number(input[3]) * 1000;

    for (let i = 1; i <= 30; i++) {
        let day = i;
        foodQuantity -= 300;

        if (day % 2 === 0) {
            let additionalHay = foodQuantity * 0.05;
            hayQuantity -= additionalHay;
        }

        if (day % 3 === 0) {
            const additionalCover = guineaWeigth / 3;
            coverQuantity -= additionalCover;
        }
        if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            return console.log('Merry must go to the pet store!');
        }
    }
    const foodLeft = foodQuantity / 1000;
    const hayLeft = hayQuantity / 1000;
    const coverLeft = coverQuantity / 1000;

    console.log(`Everything is fine! Puppy is happy! Food: ${foodLeft.toFixed(2)}, Hay: ${hayLeft.toFixed(2)}, Cover: ${coverLeft.toFixed(2)}.`);
}
pig((["10", "5", "5.2", "1"]));
pig((["1", "1.5", "3", "1.5"]));
pig(["9","5","5.2","1"]);