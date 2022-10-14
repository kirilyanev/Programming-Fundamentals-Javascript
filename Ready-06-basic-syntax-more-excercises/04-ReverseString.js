function stringReverse(input) {
    let char = input.toString().split('');
    reversedString = char.reverse().join('');
    console.log(reversedString);
}
stringReverse(1234);