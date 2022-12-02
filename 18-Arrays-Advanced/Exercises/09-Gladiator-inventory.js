function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (const line of input) {
        let [command, item] = line.split(' ');

        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }

                break;

            case 'Trash':
                if (inventory.includes(item)) {
                    let itemIndex = inventory.indexOf(item);
                    inventory.splice(itemIndex, 1);
                }

                break;

            case 'Repair':
                if (inventory.includes(item)) {
                    let itemIndex = inventory.indexOf(item);
                    let repairedItem = inventory.splice(itemIndex, 1);
                    inventory.push(repairedItem.join());
                }

                break;

            case 'Upgrade': { }
                let [itemToUpgrade, upgrade] = item.split('-');

                if (inventory.includes(itemToUpgrade)) {
                    let itemIndex = inventory.indexOf(itemToUpgrade);
                    let upgradedItem = `${itemToUpgrade}:${upgrade}`
                    inventory.splice(itemIndex + 1, 0, upgradedItem);
                }

                break;
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);