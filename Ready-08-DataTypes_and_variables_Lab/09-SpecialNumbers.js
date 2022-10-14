function isSpecial(number) {
    let isSpecial = true;
    
    for (let currentNum = 1; currentNum <= number; currentNum++) {
        let sum = 0;
        let numberToString = currentNum.toString();
        let numberLength = numberToString.length;
        for (let i = 0; i < numberLength; i++) {
            if (currentNum > 10){
                sum += Number(numberToString[i]);
            } else {
                sum += Number([currentNum]);
            }
        }
        if(sum === 5 || sum === 7 || sum === 11){
            isSpecial = true;
        }else{
            isSpecial = false;
        }
        if(isSpecial){
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
    }
}
isSpecial(20);