function tour(input) {
    let stops = input.shift();
    let currLine = input.shift();

    while (currLine !== 'Travel') {
        stops = stops.split('');

        if (currLine.includes('Add')) {
            let [command, index, stop] = currLine.split(':');

            if (stops[Number(index)]) {
                stops.splice(index, 0, stop);
            }

            stops = stops.join('');
            console.log(stops);

        } else if (currLine.includes('Remove')) {
            let [command, index, lastIndex] = currLine.split(':');
            let elToRemove = Number(lastIndex) - Number(index);

            if (stops[Number(index)] && stops[Number(lastIndex)]) {
                stops.splice(Number(index), elToRemove + 1);
            }

            stops = stops.join('');
            console.log(stops);

        } else if (currLine.includes('Switch')) {
            let [command, oldStop, newStop] = currLine.split(':');
            stops = stops.join('');

            if (stops.includes(oldStop)) {
                stops = stops.replace(oldStop, newStop);
            }

            console.log(stops);
        }

        currLine = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
tour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]));