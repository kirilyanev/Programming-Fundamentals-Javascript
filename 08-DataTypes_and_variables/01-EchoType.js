function solve(input) {
    if (typeof(input) == 'string') {
        console.log(`string \n${input}`)
    } else if(typeof(input) == 'number') {
        console.log(`number \n${input}`)
    } else {
        console.log(`object \nParameter is not suitable for printing`)
    }
}