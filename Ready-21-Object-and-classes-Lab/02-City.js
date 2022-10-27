function cityInfo(input) {
    let city = input;

    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})