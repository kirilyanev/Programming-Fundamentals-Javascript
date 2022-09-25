function latinLetters(input) {
    let num = Number(input);
    let print = '';
    for (let i = 0; i <= num; i++) {
        let letter = String.fromCharCode(97+i);
        let printOne = letter;
        for (let j = 0; j <= num ; j++) {
            let letter = String.fromCharCode(97+j);
            let printTwo = letter;
            for (let m = 0; m <= num; m++) {
                let letter = String.fromCharCode(97+m);
                let printThree = letter;
                console.log(`${printOne}${printTwo}${printThree}`);
            }
        }
    }
}
latinLetters('3');