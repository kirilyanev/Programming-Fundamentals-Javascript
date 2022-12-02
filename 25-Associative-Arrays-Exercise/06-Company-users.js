function companyUsers(companies) {
    let companiesArr = [];

    for (const companyAndEmployee of companies) {
        let [company, employee] = companyAndEmployee.split(' -> ');

        if (!companiesArr[company])
            companiesArr[company] = [];

        if (!(companiesArr[company].includes(employee))) {
            companiesArr[company].push(employee);
        }
    }

    let companyNames = Object.entries(companiesArr);
    let sortedCompanies = companyNames.sort((a, b) => a[0].localeCompare(b[0]));

    for (const company of sortedCompanies) {
        
        console.log(company[0]);

        let employees = company[1];

        employees.forEach(employee => {
            console.log(`-- ${employee}`);
        });
    }
}
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345']);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);