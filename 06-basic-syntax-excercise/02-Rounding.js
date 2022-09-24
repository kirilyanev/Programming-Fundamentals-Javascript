function solve(number,precision) {
    if (precision > 15) {
        precision = 15;
    }

    number = number.toFixed(precision);
    console.log(Number(number));
}