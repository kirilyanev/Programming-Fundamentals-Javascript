function replaceChar(string) {
    let stringArr = string.split('');
    let prevChar = stringArr.shift();
    let result = prevChar;

    for (const currChar of stringArr) {
        if (prevChar !== currChar) {
            result += currChar;
        }

        prevChar = currChar;
    }

    console.log(result);
}
replaceChar('aaaaabbbbbcdddeeeedssaa')