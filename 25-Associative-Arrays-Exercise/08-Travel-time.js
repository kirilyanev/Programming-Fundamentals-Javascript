// First try - wrong approach

// function travelTime(input) {
//     let countries = [];

//     for (const line of input) {
//         let [country,townName,travelCost] = line.split(' > ');
//         if (!countries.hasOwnProperty(country)) {
//             countries[country] = {};
//         }

//         if (!countries[country].hasOwnProperty(townName)) {
//             countries[country][townName] = Number(travelCost);
//         } else {
//             let oldPrice = countries[country][townName];
//             if (oldPrice > Number(travelCost)) {
//                 countries[country][townName] = Number(travelCost);
//             }
//         }
//     }
    
//     let countryEntries = Object.entries(countries);
//     countryEntries.sort((a,b) => {
//         let result = a[0].localeCompare(b[0])
        
//         if (result === 0) {
//             return a[0][1] - (b[0][1]);
//         }

//         return result;
//         });

//     countryEntries.sort((a,b) => a[0] - b[0]);

//     // for (const key in countryEntries) {
//     //     console.table(countryEntries[key]);
//     // }
//     console.table(countryEntries);

//     //console.table(countries); 
// }

//second solution 100/100
function travel(input) {
    let obj = {};

    for (const line of input) {
        let [country, city, price] = line.split(' > ');

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }

        if (!obj[country].hasOwnProperty(city)) {
            obj[country][city] = Number(price);
        } else {
            let oldPrice = obj[country][city];

            if (oldPrice > Number(price)) {
                obj[country][city] = Number(price);
            }
        }
    }

    let sortedCountries = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (const country of sortedCountries) {
        let result = [];
        let finalString = '';
        finalString = `${country} ->`;
        result.push(finalString);

        let cityPricePairs = obj[country];
        let sortedPrices = Object.entries(cityPricePairs);

        sortedPrices.sort((a, b) => a[1] - b[1]);

        sortedPrices.forEach(cityAndPrice => {
            finalString = `${cityAndPrice[0]} -> ${cityAndPrice[1]}`
            result.push(finalString);
        });

        console.log(result.join(' '));
    }
}

// travel([
//     "Bulgaria > Petrich > 500",
//     "Bulgaria > Burgas > 100",
//     "Bulgaria > Chelopech > 800",
//     "Bulgaria > Sofia > 200",
//     "Bulgaria > Sofia > 900"
//     ]);
// travel([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
//     ]);
travel([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);