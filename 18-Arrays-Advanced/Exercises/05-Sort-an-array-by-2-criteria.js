// function sortingArray(input) {
//     let arr = input;
//     let arrAlphabeticOrder = arr.sort((a, b) => a.localeCompare(b));
//     let arrAscending = arrAlphabeticOrder.sort((a, b) => a.length - b.length);

//     console.log(arrAscending.join('\n'));
// }
// sortingArray(['alpha', 'beta', 'gamma']);
// sortingArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);


// Second solution
function arraySort(arr) {
    // let sortedArray = arr.sort((a, b) => a.length - b.length) || a.localeCompare(b));
    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sortedArray.join('\n'));
}
arraySort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

