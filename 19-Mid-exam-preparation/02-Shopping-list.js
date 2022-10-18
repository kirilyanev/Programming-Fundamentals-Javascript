function shopping(input) {
    let groceries = input.shift().split('!');
    let inputLength = input.length
    for (let i = 0; i < inputLength; i++) {
        let currentCommand = input[i].split(' ');
        let command = currentCommand[0];
        let item = currentCommand[1];

        if (command === 'Urgent') {
            if (!groceries.includes(item)) {
                groceries.unshift(item);
            }
        } else if (command === 'Unnecessary') {
            if (groceries.includes(item)) {
                let itemIndex = groceries.indexOf(item);
                groceries.splice(itemIndex, 1);
            }
        } else if (command === 'Correct') {
            let oldItem = currentCommand[1];
            let newItem = currentCommand[2];

            if (groceries.includes(oldItem)) {
                let oldItemIndex = groceries.indexOf(oldItem);
                groceries.splice(oldItemIndex, 1, newItem);
            }
        } else if (command === 'Rearrange') {
            if (groceries.includes(item)) {
                let itemIndex = groceries.indexOf(item);
                groceries.splice(itemIndex, 1);
                groceries.push(item);
            }
        }
    }
    console.log(groceries.join(','));
}
shopping((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]));