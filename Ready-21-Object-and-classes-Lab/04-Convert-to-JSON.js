function personInfo(firstName, lastName, haircolor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: haircolor,
    }

    let ObjToJson = JSON.stringify(person);

    console.log(ObjToJson);
}

personInfo('George', 'Jones', 'Brown')