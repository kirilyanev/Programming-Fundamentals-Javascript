function time(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let totalTime = firstTime + secondTime + thirdTime;
    let minutes = totalTime / 60;
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${Math.floor(minutes)}:0${seconds}`);
    } else {
        console.log(`${Math.floor(minutes)}:${seconds}`);
    }
}