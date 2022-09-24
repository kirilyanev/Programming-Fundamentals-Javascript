function supplies(input) {
    let pricePens = 5.80;
    let priceMarkers = 7.20;
    let priceCleaner = 1.20;

    let penPackets = Number(input[0]);
    let markerPackets = Number(input[1]);
    let litersCleaner = Number(input[2]);
    let discoutPercent = Number(input[3] / 100);
    let checkout = penPackets * pricePens + markerPackets * priceMarkers + 
    priceCleaner * litersCleaner;
    let finalSum = checkout - (checkout * discoutPercent);
    console.log(finalSum);
}