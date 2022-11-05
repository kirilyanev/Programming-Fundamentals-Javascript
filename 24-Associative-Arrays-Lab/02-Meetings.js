function meetingSchedule(input) {
    const meetings = {};

    for (const entry of input) {
        let [day, person] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = person;

            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
meetingSchedule(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);