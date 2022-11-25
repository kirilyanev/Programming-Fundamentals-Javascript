function solve(input) {
    let pattern = /(\|{1}|#{1})(?<itemName>[A-Za-z\s]+)\1(?<expiringDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d*)\1/gm;
    let text = input.shift();
    let allMatches = text.matchAll(pattern);
    //let allMatches = [...text.matchAll(pattern)];

    let result = [];

    for (const match of allMatches) {
        let object = {};
        object.item = match.groups.itemName;
        object.expiringDate = match.groups.expiringDate;
        object.calories = match.groups.calories;
        result.push(object);
    }

    let totalCalories = 0;

    for (const item of result) {
        let calories = Number(item['calories']);

        totalCalories += calories;
    }

    foodDays = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${foodDays} days!`);

    if (foodDays !== 0) {
        for (const item of result) {
            console.log(`Item: ${item['item']}, Best before: ${item['expiringDate']}, Nutrition: ${item['calories']}`);
        }
    }
}
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
//solve(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);