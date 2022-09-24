function calculator(input) {
    /*сума = депозирана сума  + срок на депозита * 
    ((депозирана сума * годишен лихвен процент ) / 12)*/
    let depositSum = Number(input[0]);
    let depositMonths = Number(input[1]);
    let yearlyInterest = Number(input[2]);

    let interest = depositSum * yearlyInterest / 100;
    let monthlyInterest = interest / 12;
    let finalSum = depositSum + depositMonths * monthlyInterest
    console.log(finalSum);
}