function pyramid(base,increment) {
    let blocks = base;
    let area = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let pyramidSteps = Math.ceil(base / 2);
    let pyramidHeight = Math.floor(pyramidSteps * increment);

    for (let step = 1; step <= pyramidSteps; step++) {
        area = blocks * blocks;
        if (step % 5 != 0) {
            stone = (blocks - 2) * (blocks - 2);
            marble = area - stone;
            lapis = 0;
        } else {
            stone = (blocks - 2) * (blocks - 2);
            lapis = area - stone;
            marble = 0;
        }
        if (step == pyramidSteps) {
            gold = area;
            stone = 0;
            marble = 0;
            lapis = 0;
        }
        totalStone += stone;
        totalMarble += marble;
        totalLapis += lapis;
        blocks -= 2;
    }
    totalStone = Math.ceil(totalStone * increment);
    totalMarble = Math.ceil(totalMarble * increment);
    totalLapis = Math.ceil(totalLapis * increment);
    gold = Math.ceil(gold * increment);

    console.log(`Stone required: ${totalStone}\nMarble required: ${totalMarble}\nLapis Lazuli required: ${totalLapis}\n` + 
    `Gold required: ${gold}\nFinal pyramid height: ${pyramidHeight}`)
}
pyramid(23,0.5);