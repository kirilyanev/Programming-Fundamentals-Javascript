function solve(input) {
    let plantsCount = input.shift();

    let plantsArr = [];
    const allPlantsNames = [];

    for (let i = 0; i < plantsCount; i++) {
        let plantData = input.shift().split('<->');
        let plant = plantData[0];
        let rarity = plantData[1];

        if (!allPlantsNames.includes(plant)) {
            allPlantsNames.push(plant);

            let plants = {};

            plants.plant = plant;
            plants.rarity = rarity;

            let data = JSON.stringify(plants);
            plantsArr.push(data);
        } else {
            for (let index = 0; index < plantsArr.length; index++) {
                let currObj = plantsArr[index];

                let plantObject = JSON.parse(currObj);

                if (plantObject.plant === plant) {
                    plantObject.rarity = rarity;

                    let result = JSON.stringify(plantObject);
                    plantsArr[index] = result;
                }
            }
        }
    }

    let currLine = input.shift();

    while (currLine !== 'Exhibition') {
        let command = currLine.split(':')[0];
        let plantData = currLine.split(':')[1];

        if (command === 'Rate') {
            plantData = plantData.split('-');
            let plant = plantData[0].trim();
            let rating = plantData[1];

            if (!allPlantsNames.includes(plant)) {
                console.log('error');
            }

            for (let index = 0; index < plantsArr.length; index++) {
                let currPlant = plantsArr[index];

                if (currPlant.includes(plant)) {
                    let plantToObj = JSON.parse(currPlant);
                    if (!plantToObj.rating) {
                        plantToObj.rating = rating;
                    } else {
                        plantToObj.rating += rating;
                    }

                    let plantToStr = JSON.stringify(plantToObj);
                    plantsArr[index] = plantToStr;
                }
            }

        } else if (command === 'Update') {
            plantData = plantData.split('-');
            let plant = plantData[0].trim();
            let newRarity = plantData[1].trim();

            if (!allPlantsNames.includes(plant)) {
                console.log('error');
            }

            for (let index = 0; index < plantsArr.length; index++) {
                let currPlant = plantsArr[index];

                if (currPlant.includes(plant)) {
                    let plantToObj = JSON.parse(currPlant);
                    plantToObj.rarity = newRarity;
                    let plantToStr = JSON.stringify(plantToObj);
                    plantsArr[index] = plantToStr;
                }
            }
        } else if (command === 'Reset') {
            let plant = plantData.trim();

            if (!allPlantsNames.includes(plant)) {
                console.log('error');
            }

            for (let index = 0; index < plantsArr.length; index++) {
                let currPlant = plantsArr[index];

                if (currPlant.includes(plant)) {
                    let plantToObj = JSON.parse(currPlant);
                    plantToObj.rating = false;
                    let plantToStr = JSON.stringify(plantToObj);
                    plantsArr[index] = plantToStr;
                }
            }
        } else {
            console.log('error');
        }

        currLine = input.shift();
    }

    console.log('Plants for the exhibition:');

    for (const plantInfo of plantsArr) {
        let currPlantData = JSON.parse(plantInfo);

        let [name, rarity, rating] = Object.values(currPlantData);

        if (!rating) {
            rating = '0';
        }

        let numbersInRating = rating.trim().split(' ');
        let totalSum = 0;

        numbersInRating.forEach(num => {
            totalSum += Number(num);
        });

        let averageRating = totalSum / numbersInRating.length;

        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);