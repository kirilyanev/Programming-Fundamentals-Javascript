function emplooyesList(input) {
    let employees = {}

    for (const name of input) {
        employees[name] = name.length;
    }

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

emplooyesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])