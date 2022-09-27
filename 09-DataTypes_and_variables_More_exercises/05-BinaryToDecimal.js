// Това първото не работи! Опит(неуспешен) за математическо разписване на формулата при конвертиране на бройната система.

// function convert(number) {
//     let binaryString = number.toString().split();
//     let decimal = 0;
//     for (let i = 0; i < binaryString.length; i++) {
//         decimal += (decimal * 2) + binaryString[i];
//     }
//     console.log(decimal);
// }
// convert(11110000);

function convert(number) {
    let binary = number.toString();
    console.log(parseInt(binary, 2));
}
convert(11110000);