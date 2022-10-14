function read(pagesNumber,pagesOneHour,days) {
    let timeToReadBook = pagesNumber / pagesOneHour;
    let readingHoursPerDay = timeToReadBook / days;
    console.log(readingHoursPerDay);
}
read(432,15,4);