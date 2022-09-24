function booklist(input) {
    let bookPages = Number(input[0]);
    let pagesReadForHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let bookReadingTime = bookPages / pagesReadForHour;
    let hoursPerDay = bookReadingTime / daysNeeded;
    console.log(hoursPerDay);
}