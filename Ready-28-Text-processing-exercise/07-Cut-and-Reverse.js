function cutReverseString(string) {
    let stringMiddle = string.split('').length / 2;

    let firstHalf = string.substring(0, stringMiddle);
    let secondHalf = string.substring(stringMiddle);

    let first = firstHalf.split('')
        .reverse()
        .join('');
    let second = secondHalf.split('')
        .reverse()
        .join('');

    console.log(first);
    console.log(second);
}
cutReverseString('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');