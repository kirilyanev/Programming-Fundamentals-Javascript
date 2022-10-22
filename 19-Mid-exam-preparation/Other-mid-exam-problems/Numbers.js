function numbers(input) {
    let array = input.split(' ').map(Number);
    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    let averageValue = sum / array.length;
    let biggerThanAverage = array.filter(number => number > averageValue);
    
    if (biggerThanAverage.length == 0) {
        return console.log('No');
    }

    let topFive = biggerThanAverage.sort((a, b) => b - a);
    topFive.length = 5;
    console.log(topFive.join(' '));
}
numbers('-1 -2 -3 -4 -5 -6');