function printCharRange(charOne, charTwo) {
    let rangeStart = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
    let rangeFinish = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());
    let result = ''

    for (let i = rangeStart + 1; i < rangeFinish; i++) {
        result += `${String.fromCharCode(i)} `;
    }
    console.log(result);
}
printCharRange('C', '#');