function loadingBar(number) {
    let graphicBar = [];
    let loadingPercentages = number / 10;

    if (number === 100) {
        console.log(`100% Complete!`);
        console.log('[%%%%%%%%%%]');
    } else {
        for (let i = 0; i < loadingPercentages; i++) {
            graphicBar.unshift('%');
        }

        graphicBar.length = 10;

        graphicBar.fill('.', loadingPercentages, graphicBar.length);
        console.log(`${number}% [${graphicBar.join('')}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(50);