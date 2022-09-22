//Reshenie 1

//function language(country) {
//    if (country == 'England' || country == 'USA') {
//        console.log('English')
//    } else if (country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
//        console.log('Spanish')
//    } else {
//        console.log('unknown')
//    }
//
//    }

//Reshenie 2

function language(country) {
    switch(country) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown')
    }
}