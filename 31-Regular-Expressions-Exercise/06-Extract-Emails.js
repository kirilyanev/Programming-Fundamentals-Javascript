function extractEmails(text) {
    //const pattern = /[A-Za-z0-9.-_]+@[a-z-]+.[a-z-]+/gm;
    //const pattern = /[A-Za-z0-9.-_]+@(?<name>[a-z-.]+)/gm;
    // const pattern = /(^|(?<=\s))(([A-za-z0-9]+)([\.\-_])?([A-Za-z0-9]+)(@)([A-za-z]+)([\.\-_]([A-za-z]+)+))(\b|(?=\s))/gm;

    const pattern = /(^|(?<=\s))(([A-Za-z0-9]+)([\-\._]?)([A-Za-z0-9]+)(@)([A-Za-z]+([\-\._][A-Za-z]+)+))(\b|(?=\s))/gm

    let emails = text.match(pattern);

    for (const email of emails) {
        console.log(email);
    };
}
extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');