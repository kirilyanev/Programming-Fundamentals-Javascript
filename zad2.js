function solve(input) {
    const tests = Number(input.shift());

    for (let i = 0; i < tests; i++) {
        let [x,n,y] = input.shift().split(' ');
        let result = 0

        let currNum = [];
        let element = x - 1;

        for (let i = 0; i < n; i++) {
            currNum.push(element);
        }

        for (let index = 0; index < currNum.length; index++) {
            
            
            
        }
        console.table(currNum);
    }
    
}
solve(['2',
'2 2 3',
'3 3 4']);