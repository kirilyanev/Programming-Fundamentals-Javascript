function makePhoneBook(input) {
    const phoneBook = {};

    for (const line of input) {
        let [person, phoneNumber] = line.split(' ');
        phoneBook[person] = phoneNumber;
    }
    
    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

makePhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);