function plunderCalc(input) {
    let days = Number(input[0]);
    let plunderForDay = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let totalPlunder = 0;

    for (let index = 1; index <= days; index++) {
        totalPlunder += plunderForDay;
        if (index % 3 === 0) {
            totalPlunder += (plunderForDay * 0.50);
        }

        if (index % 5 === 0) {
            totalPlunder -= (totalPlunder * 0.30);
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentPlunderCollect = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentPlunderCollect.toFixed(2)}% of the plunder.`);
    }
}
plunderCalc(["10", "20", "380"]);