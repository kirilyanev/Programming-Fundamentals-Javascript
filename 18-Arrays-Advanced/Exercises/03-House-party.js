function listOfGuest(input) {
    let guestList = [];

    for (let index = 0; index < input.length; index++) {
        let currentGuestAction = input[index].split(' ');
        let guestName = currentGuestAction[0];

        if (currentGuestAction.includes('not')) {

            if (!guestList.includes(guestName)) {
                console.log(`${guestName} is not in the list!`);
            } else {
                let guestIndex = guestList.indexOf(guestName);
                guestList.splice(guestIndex, 1);
            }

        } else {

            if (!guestList.includes(guestName)) {
                guestList.push(guestName);
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}
listOfGuest(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);