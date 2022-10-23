function library(input) {
    let bookShelf = input.shift().split('&');
    let currentLine = input.shift().split(' | ');
    let command = currentLine[0];
    let bookOne = currentLine[1];
    let bookTwo = currentLine[2];

    while (command !== 'Done') {
        if (command === 'Add Book') {
            if (!bookShelf.includes(bookOne))
                bookShelf.unshift(bookOne);
        } else if (command === 'Take Book') {
            if (bookShelf.includes(bookOne)) {
                let bookIndex = bookShelf.indexOf(bookOne);
                bookShelf.splice(bookIndex, 1);
            }
        } else if (command === 'Swap Books') {
            if (bookShelf.includes(bookOne) && bookShelf.includes(bookTwo)) {
                let bookIndexOne = bookShelf.indexOf(bookOne);
                let bookIndexTwo = bookShelf.indexOf(bookTwo);
                bookShelf[bookIndexOne] = bookTwo;
                bookShelf[bookIndexTwo] = bookOne;
            }
        } else if (command === 'Insert Book') {
            if (!bookShelf.includes(bookOne)) {
                bookShelf.push(bookOne);
            }
        } else if (command === 'Check Book') {
            let indexOfBook = bookOne;

            if (bookShelf[indexOfBook]) {
                console.log(bookShelf[indexOfBook]);
            }
        }

        currentLine = input.shift().split(' | ');
        command = currentLine[0];
        bookOne = currentLine[1];
        bookTwo = currentLine[2];
    }

    console.log(bookShelf.join(', '));
}
library(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])