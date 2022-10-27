function jsonConverter(input) {
    let jsonFormat = input;
    let object = JSON.parse(jsonFormat);

    for (const key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`);
    }
}

jsonConverter('{"name": "George", "age": 40, "town": "Sofia"}');

