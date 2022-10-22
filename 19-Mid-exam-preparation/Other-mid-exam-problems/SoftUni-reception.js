function employeesWorkCapacity(input) {
    let employeeOne = Number(input[0]);
    let employeeTwo = Number(input[1]);
    let employeeThree = Number(input[2]);
    let studentsCount = Number(input[3]);

    let totalAnswersPerHour = employeeOne + employeeTwo + employeeThree;
    let workHours = 0;

    while (studentsCount > 0) {
        workHours++;
        if (workHours % 4 != 0) {
            studentsCount -= totalAnswersPerHour;
        }
    }

    console.log(`Time needed: ${workHours}h.`);
}
employeesWorkCapacity(['3', '2', '5', '40']);