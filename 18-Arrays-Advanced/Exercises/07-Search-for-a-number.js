function numSearch(array, operations) {
    let takeElementsFromArray = operations[0];
    let elementsToDelete = operations[1];
    let searchedNum = operations[2];

    //  First, we take 5 elements from the array. DONE
    let newArray = array.slice(0, takeElementsFromArray);

    //  Delete the first 2 elements. DONE
    newArray.splice(0, elementsToDelete,);

    //  Then we search for the number 3. DONE
    let count = 0;

    newArray.forEach(element => {
        if (element === searchedNum) {
            count++
        }
    });

    console.log(`Number ${searchedNum} occurs ${count} times.`);
}
numSearch([7, 1, 5, 8, 2, 7],
    [3, 1, 5])