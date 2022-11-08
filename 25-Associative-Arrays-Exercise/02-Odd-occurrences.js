function oddOccur(input) {
    let elements = input.split(' ').map(a => a.toLowerCase());

    let elementsCount = {};

    for (const element of elements) {
        if (!elementsCount.hasOwnProperty(element)) {
            elementsCount[element] = 1;
        } else {
            elementsCount[element] += 1;
        }
    }

    let sorted = Object.entries(elementsCount).sort((a, b) => b[1] - a[1]);
    let result = '';

    for (const el of sorted) {
        if (el[1] % 2 !== 0) {
            result += `${el[0]} `;
        }
    }
    console.log(result);
}

oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccur('Cake IS SWEET is Soft CAKE sweet Food')