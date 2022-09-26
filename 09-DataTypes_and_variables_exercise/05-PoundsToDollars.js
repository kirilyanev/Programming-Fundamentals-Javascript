function dollarConverter(pound) {
    const onePoundToDollar = 1.31;
    let dollars = pound * onePoundToDollar;
    console.log(dollars.toFixed(3));
}
dollarConverter(39);