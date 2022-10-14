function ticket(day,age) {
    let ticketPrice = 0
    if (0 <= age && age <= 18) {
        if (day == 'Weekday') {
            ticketPrice = 12
        } else if (day == 'Weekend') {
            ticketPrice = 15
        } else if (day == 'Holiday') {
            ticketPrice = 5
        }
    } else if (18 < age && age <= 64) {
        if (day == 'Weekday') {
            ticketPrice = 18
        } else if (day == 'Weekend') {
            ticketPrice = 20
        } else if (day == 'Holiday') {
            ticketPrice = 12
        }
    } else if (64 < age && age <= 122){
        if (day == 'Weekday') {
            ticketPrice = 12
        } else if (day == 'Weekend') {
            ticketPrice = 15
        } else if (day == 'Holiday') {
            ticketPrice = 10
        }
    }
    if (ticketPrice !== 0) {
        console.log(`${ticketPrice}$`)
    } else {
        console.log('Error!')
    }
}