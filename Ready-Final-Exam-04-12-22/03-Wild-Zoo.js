function wildZoo(input) {
    let zoo = [];

    let currLine = input.shift();

    while (currLine !== 'EndDay') {
        let [command, animalData] = currLine.split(': ');

        if (command === 'Add') {
            let [animalName, neededFood, area] = animalData.split('-');

            if (!zoo[animalName]) {
                zoo[animalName] = {
                    neededFood: Number(neededFood),
                    area: area,
                }
            } else {
                zoo[animalName].neededFood += Number(neededFood);
            }

        } else if (command === 'Feed') {
            let [command, animalData] = currLine.split(': ');
            let [animalName, food] = animalData.split('-');

            if (zoo[animalName]) {
                zoo[animalName].neededFood -= Number(food);

                if (zoo[animalName].neededFood <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    delete zoo[animalName];
                }
            }
        }

        currLine = input.shift();
    }

    console.log('Animals:');

    for (const animal in zoo) {
        console.log(`${animal} -> ${zoo[animal].neededFood}g`);
    }

    let animalsInArea = [];

    for (const animal in zoo) {
        let currArea = zoo[animal].area;

        if (!animalsInArea[currArea]) {
            animalsInArea[currArea] = 1;
        } else {
            animalsInArea[currArea] += 1;
        }
    }

    console.log('Areas with hungry animals:');

    for (const area in animalsInArea) {
        console.log(`${area}: ${animalsInArea[area]}`);
    }
}
// wildZoo(["Add: Adam-4500-ByTheCreek",
// "Add: Maya-7600-WaterfallArea",
// "Add: Maya-1230-WaterfallArea",
// "Feed: Jamie-2000",
// "EndDay"]);
// wildZoo(["Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"]);
wildZoo(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"]);