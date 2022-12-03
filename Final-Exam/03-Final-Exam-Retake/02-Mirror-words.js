function findMirrorWords(input) {
    let text = input.shift();
    const pattern = /(@|#)(?<firstWord>[A-Za-z][A-Za-z][A-Za-z]+)\1{2}(?<secondWord>[A-Za-z][A-Za-z][A-Za-z]+)\1/gm;
    let matches = text.matchAll(pattern)
    let mirroredWords = [];
    let matchesCount = 0;

    for (const match of matches) {
        matchesCount += 1;

        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        let result = '';

        if (firstWord.split('').reverse().join('') === secondWord) {
            result = firstWord + ' <=> ' + secondWord;
            mirroredWords.push(result);
        }
    }

    if (matchesCount === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${matchesCount} word pairs found!`);

        if (mirroredWords.length === 0) {
            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(mirroredWords.join(', '));
        }
    }
}
findMirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
findMirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
findMirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);