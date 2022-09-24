function repainting(input) {
    let priceNailon = 1.50;
    let pricePaint = 14.50;
    let priceThinner = 5.00;

    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let materialSum = (nailon + 2) * priceNailon + (paint + (paint * 0.10)) * pricePaint + thinner * priceThinner + 0.40;
    let workersWages = (materialSum * 0.30) * workHours;
    let totalSum = materialSum + workersWages;
    console.log(totalSum);
}