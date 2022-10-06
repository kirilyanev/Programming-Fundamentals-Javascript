function merge(arrayOne,arrayTwo) {
    let newArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
        let currentElementOne = arrayOne[i];
        let currentElementTwo = arrayTwo[i];
        if (i % 2 === 0) {
            let sum = Number(currentElementOne) + Number(currentElementTwo);
            newArray.push(sum);
        } else {
            let concatenation = currentElementOne.toString() + currentElementTwo.toString();
            newArray.push(concatenation);
        }
    }
    console.log(newArray.join(' - '));
}
merge(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);