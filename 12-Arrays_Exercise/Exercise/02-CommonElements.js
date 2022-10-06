function compare(firstArr,secondArr) {
    let firstArrLength = firstArr.length;
    let secondArrLength = secondArr.length;
    for (let f = 0; f < firstArrLength; f++) {
        let currentElementOne = firstArr[f];
        for (let s = 0; s < secondArrLength; s++) {
            let currentElementTwo = secondArr[s];
            if (currentElementOne === currentElementTwo) {
                console.log(currentElementOne);
            }
        }
    }
}
compare(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])