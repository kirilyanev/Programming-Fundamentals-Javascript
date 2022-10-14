// Дърварския начин на решение

// function nextDay(year,month,day) {
//     let currentYear = year;
//     let currentMonth = month;
//     let currentDay = day;

//     if (currentYear % 4 == 0 || currentYear % 100 != 0 || currentYear % 400 == 0) {
//         if (currentMonth == 2 && currentDay == 29) {
//             currentMonth = 3;
//             currentDay = 1;
//         } else {
//             if (currentMonth == 12 && currentDay == 31) {
//                 currentYear += 1;
//                 currentMonth = 1;
//                 currentDay = 1;
//             }  else if (currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10 || currentMonth == 12) {
//                 if (currentDay == 31) {
//                     currentDay = 1;
//                     currentMonth += 1;
//                 } else {
//                     currentDay += 1;
//                 }
//             } else if (currentMonth == 2 || currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11) {
//                 if (currentDay == 30) {
//                     currentDay = 1;
//                     currentMonth += 1;
//                 } else {
//                     currentDay += 1;
//                 }
//             }
//         }
//     } else {
//         if (currentMonth == 12 && currentDay == 31) {
//             currentYear += 1;
//             currentMonth = 1;
//             currentDay = 1;
//         } else if (currentMonth == 2 && currentDay == 28) {
//             currentDay = 1;
//             currentMonth += 1;
//         } else if (currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10 || currentMonth == 12) {
//             if (currentDay == 31) {
//                 currentDay = 1;
//                 currentMonth += 1;
//             } else {
//                 currentDay += 1;
//             }
//         } else if (currentMonth == 2 || currentMonth == 4 || currentMonth == 6 || currentMonth == 9 || currentMonth == 11) {
//             if (currentDay == 30) {
//                 currentDay = 1;
//                 currentMonth += 1;
//             } else {
//                 currentDay += 1;
//             }
//         }
//     }
//     if (currentYear.toString().length == 4) {
//         console.log(`${currentYear}-${currentMonth}-${currentDay}`);
//     } else if (currentYear.toString().length == 2) {
//         console.log(`19${currentYear}-${currentMonth}-${currentDay}`);
//     } else if (currentYear.toString().length == 1) {
//         console.log(`190${currentYear}-${currentMonth}-${currentDay}`);
//     }
// }

// Елегантния начин
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date -> Документация за date();

function nextDay2(year,month,day) {
    let nextDay = new Date(year, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay2(1,1,1);