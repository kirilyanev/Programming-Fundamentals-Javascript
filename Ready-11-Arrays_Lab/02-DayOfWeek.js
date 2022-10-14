function dayWeek(day) {
    let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let stringDay = weekDays[day - 1];
    if (day >= 1 && day <= 7) {
        console.log(stringDay);
    } else {
        console.log('Invalid day!');
    }
}
dayWeek(11);