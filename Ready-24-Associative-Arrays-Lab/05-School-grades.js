function school(allStudents) {
    let schoolGrades = {};

    for (const currStudent of allStudents) {
        let studentInfo = currStudent.split(' ')
        let name = studentInfo.shift();
        let grades = studentInfo.map(x => Number(x));

        if (schoolGrades.hasOwnProperty(name)) {
            schoolGrades[name] = schoolGrades[name].concat(grades);
        } else {
            schoolGrades[name] = grades;
        }
    }

    let sortedStudents = Object.entries(schoolGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortedStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

school(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);