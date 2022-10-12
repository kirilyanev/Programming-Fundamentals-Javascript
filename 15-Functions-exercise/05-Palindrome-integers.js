function palindromeCheck(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let integerArray = numbers[i].toString().split('');
        let reversedArray = numbers[i].toString().split('').reverse();

        if (integerArray.join() === reversedArray.join()) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeCheck([32, 2, 232, 1010]);