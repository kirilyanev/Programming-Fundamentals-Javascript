function collectResources(resources) {
    const resourcesLength = resources.length
    let allResources = [];

    for (let i = 0; i < resourcesLength; i += 2) {
        let resource = '';
        let quantity = 0;

        resource = resources[i];
        quantity = Number(resources[i + 1]);

        if (!allResources[resource]) {
            allResources[resource] = quantity;
        } else {
            allResources[resource] += quantity;
        }
    }

    for (const resource in allResources) {
        console.log(`${resource} -> ${allResources[resource]}`);
    }
}

collectResources([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);

collectResources([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);