function login(inputArray) {
    let username = inputArray[0];
    let passwordsCheck = inputArray.length;
    let password = '';
    let wrongPassword = 0;
    for (let i = 1; i < passwordsCheck; i++) {
        let passCharacters = inputArray[i].split(''); //splits the characters of password
        let reversedCharacters = passCharacters.reverse(); //reverse the characters of password
        password = reversedCharacters.join(''); //joins the reversed characters in a string
        if (username === password) {
            console.log(`User ${username} logged in.`)
        } else {
            wrongPassword += 1;
            if (wrongPassword >= 4) {
                console.log(`User ${username} blocked!`)
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);