function makeAdressBook(input) {
    let adressBook = {};
    
    for (const line of input) {
        const [name,adress] = line.split(':')
        adressBook[name] = adress;
    }
    
    const sorted = Object.entries(adressBook).sort((a,b) => a[0].localeCompare(b[0]));

    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}

makeAdressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])