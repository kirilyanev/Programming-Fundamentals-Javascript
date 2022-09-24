function lastDigitName(num) {
    let name = ['zero','one','two','three','four','five','six','seven','eight','nine']
    console.log(name[Number(String(num).slice(-1))]);
}
lastDigitName(543)