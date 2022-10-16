function firstLastEl(input) {
    let elementsCount = input.shift(0);
    let firstElements = input.slice(0, elementsCount).join(' ');
    let lastElements = input.slice(input.length - elementsCount).join(' ');
    console.log(`${firstElements}\n${lastElements}`);
}
firstLastEl([3, 6, 7, 8, 9]);