// Only 14/100 in judge.

function crystalProcessing(input) {
    const targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];

        let cut = crystal => crystal / 4;
        let lap = crystal => crystal - (crystal * 0.2);
        let grind = crystal => crystal - 20;
        let etch = crystal => crystal - 2;
        let xRay = crystal => crystal + 1;
        let transportAndWash = crystal => Math.floor(crystal);

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xRayCount = 0;

        console.log(`Processing chunk ${currentThickness} microns`);
        while (currentThickness !== targetThickness) {
            while (currentThickness / 4 >= targetThickness) {
                currentThickness = cut(currentThickness);
                cutCount++;
                if (currentThickness === targetThickness) {
                    break;
                }
            }

            if (cutCount > 0) {
                currentThickness = Math.floor(currentThickness);
                console.log(`Cut x${cutCount}`);
                console.log('Transporting and washing');
            }

            while (currentThickness - (currentThickness * 0.2) > targetThickness) {
                currentThickness = lap(currentThickness);
                lapCount++;
            }

            if (lapCount > 0) {
                currentThickness = Math.floor(currentThickness);
                console.log(`Lap x${lapCount}`);
                console.log('Transporting and washing');
            }

            while (currentThickness - 20 > targetThickness) {
                currentThickness = grind(currentThickness);
                grindCount++;
            }

            if (grindCount > 0) {
                currentThickness = Math.floor(currentThickness);
                console.log(`Grind x${grindCount}`);
                console.log('Transporting and washing');
            }

            while (currentThickness > targetThickness) {
                currentThickness = etch(currentThickness);
                etchCount++;
            }

            if (etchCount > 0) {
                currentThickness = Math.floor(currentThickness);
                console.log(`Etch x${etchCount}`);
                console.log('Transporting and washing');
            }

            if (currentThickness !== targetThickness) {
                currentThickness = xRay(currentThickness);
                xRayCount = 1;
            }

            if (xRayCount = 1) {
                console.log('X-ray x1');
            }
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }
}
//crystalProcessing([1375, 50000]);
crystalProcessing([1000, 4000, 8100]);