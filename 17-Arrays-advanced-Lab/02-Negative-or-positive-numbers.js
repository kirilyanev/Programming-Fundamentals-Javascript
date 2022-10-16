function negOrPos(input) {
    let numbers = input;
    let resultArray = [];
    for (const num of numbers) {
        if (num < 0) {
            resultArray.unshift(num);
        } else {
            resultArray.push(num);
        }
    }
    resultArray.forEach(element => {
        console.log(element);
    });
}
negOrPos(['3', '-2', '0', '-1']);