function solve(input) {
    let cities = {};
    let array = [];

    while (input[0] !== 'Sail') {
        let currLine = input.shift().split('||');

        let city = currLine[0];
        let population = Number(currLine[1]);
        let gold = Number(currLine[2]);

        let result = array.find((x) => x.city === city);
        let index = array.indexOf(result);

        if (result) {
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = { city, population, gold };
            array.push(cities);
        }
    }

    while (input[0] !== 'End') {
        let currLine = input.shift().split('=>');
        let command = currLine[0];

        switch (command) {
            case 'Plunder':
                let cityName = currLine[1];
                let population = Number(currLine[2]);
                let gold = Number(currLine[3]);

                let result = array.find((x) => x.city === cityName);
                let index = array.indexOf(result);

                array[index].population -= population;
                array[index].gold -= gold;

                console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`);

                if (array[index].population <= 0 || array[index].gold <= 0) {
                    console.log(`${array[index].city} has been wiped off the map!`);
                    array.splice(index, 1);
                }
                break;

            case 'Prosper':
                let town = currLine[1];
                let treasure = Number(currLine[2]);

                if (treasure < 0) {
                    console.log('Gold added cannot be a negative number!');
                    break;
                }

                let currCity = array.find((x) => x.city === town);
                let cityIndex = array.indexOf(currCity);

                array[cityIndex].gold += treasure;
                console.log(`${treasure} gold added to the city treasury. ${town} now has ${array[cityIndex].gold} gold.`);
                break;
        }
    }

    if (array.length !== 0) {
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        array.forEach(el => {
            console.log(`${el.city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`);
        });
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);