function lift(input) {
    let peopleWaiting = Number(input.shift());
    let lift = input.shift().split(' ').map(x => Number(x));
    let fullLift = lift.length * 4;

    for (let i = 0; i < lift.length; i++) {
        let currentWagon = lift[i];

        while (currentWagon != 4 && peopleWaiting > 0) {
            currentWagon += 1;
            peopleWaiting -= 1;
        }
        lift[i] = currentWagon;
    }
    let peopleOnLift = 0;

    lift.forEach(element => {
        peopleOnLift += element;
    });

    if (peopleOnLift != fullLift && peopleWaiting == 0) {
        console.log(`The lift has empty spots!\n${lift.join(' ')}`);
    } else if (peopleOnLift == fullLift && peopleWaiting != 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!\n${lift.join(' ')}`);
    } else if (peopleOnLift == fullLift && peopleWaiting == 0) {
        console.log(lift.join(' '));
    }
}
lift(["15","0 0 0 0 0"]);
lift(["20","0 2 0"]);