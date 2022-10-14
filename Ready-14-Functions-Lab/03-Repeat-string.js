// function repeat(string, repeatCount) {
//     let result = '';
//     for (let i = 0; i < repeatCount; i++) {
//         result += string;
//     }
//     console.log(result);
// }
// repeat("String", 2);

// Second solution with two functions

function repeat(string, repeatCount) {

    function repetition(text, count) {
        let print = '';
        for (let i = 0; i < count; i++) {
            print += text;
        }
        return print;
    }

    console.log(repetition(string, repeatCount));
}
repeat("String", 2)