// function solve(input) {
//     const bookPages = input.shift();
//     const digit = input.shift();
//     const remainingPages = input.shift();

//     let reapedPages = [];
//     let result = 0;
//     let allPages = [];
    
//     for (let i = 1; i <= bookPages; i++) {
//         let page = i.toString();
        
//         // if (page.includes(digit) && !remainingPages.includes(page)) {
//         //     reapedPages.push(page);
//         // }

//         if (page.includes(digit)) {
//             let isGood = true;

//             if (remainingPages) {
//                 remainingPages.split(' ').forEach(currPage => {
//                     if (currPage === page) {
//                         isGood = false;
//                     }
//                 });
//             }
            
//             if (isGood) {
//                 reapedPages.push(page);
//             }
//         }
//     }
    
//     for (const page of reapedPages) {
//         result += 1;
        
//         if (!reapedPages.includes((Number(page) + 1).toString()) && (page !== bookPages) && (page !== '1'))  {
//             result += 1;
//             allPages.push(Number(page) - 1);
//         }
//         allPages.push(page);
//     }

//     console.log(result);
//     console.log(allPages);
// }


function solve(input) {
    const bookPages = Number(input.shift());
    const digit = input.shift();
    const remainingPages = input.shift();

    let tearedPages = [];
    let allPages = [];
    
    for (let i = 1; i <= bookPages; i++) {
        let page = i.toString();

        if (page.includes(digit)) {
            let isPageReaped = true;

            if (remainingPages) {
                remainingPages.split(' ').forEach(currPage => {
                    if (currPage === page) {
                        isPageReaped = false;
                    }
                });
            }
            
            if (isPageReaped) {
                tearedPages.push(page);
            }
        }
    }
    
    for (const page of tearedPages) {
        if (Number(page % 2 === 0)){
            let previous = Number(page) - 1;
            allPages.push(previous.toString());
            allPages.push(page);
        } else {
            let nextPage = Number(page) + 1;
            allPages.push(page);
            allPages.push(nextPage.toString());
        }
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    let unique = allPages.filter(onlyUnique);
    let result = unique.filter(x => 1 <= x && x <= bookPages);

    console.log(tearedPages);
    console.log(allPages);
    console.log(unique);
    console.log(result);
    console.log(result.length);
}

// solve(['23','2','2 21 22']);
solve(['55','5',]);
// solve(['2','1','']);
// solve(['2','2','']);
// solve(['555','5','']);