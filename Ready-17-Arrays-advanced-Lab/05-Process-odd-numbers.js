function processOddNumber(numbers) {
    let oddNUms = [];

    for (let index = 0; index < numbers.length; index++) {
        if (index % 2 !== 0) {
            oddNUms.push(numbers[index]);
        }
    }

    let result = oddNUms.map(a => 2 * a).reverse();
    console.log(result.join(' '));
}
processOddNumber([3, 0, 10, 4, 7, 3]);