function solve(number) {
    let totalSum = 0;
    for (let i = 1; i <= 2 * number; i++) {
        if (i % 2 != 0) {
            console.log(i)
            totalSum += number
        }
    }
    console.log(`Sum: ${totalSum}`)
}