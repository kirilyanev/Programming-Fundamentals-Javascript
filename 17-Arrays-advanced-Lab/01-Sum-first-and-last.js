function firstLastSum(numbers) {
    let firstElement = Number(numbers.shift());
    let lastElement = Number(numbers.pop());
    let result = firstElement + lastElement;
    console.log(result);
}
firstLastSum(['20', '30', '40']);