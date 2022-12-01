function solve(input) {
    //let demonsRegex = /[\w][^, ]+/gm;
    //let demonsRegex = /[\w][^, ]+(?=')/gm;
    //let demonsRegex = /\s*,\s*/gm;   - working Regex when used inside split()
    //let demons = input.match(demonsRegex);
    // let demons = input.split(/[, ]+/g/);
    // let splitPattern = /, */g;
    // let demons = input[0].split(/,\s*/g);

    let demons = input.split(/\s*,\s*/gm);

    let allDemons = [];
    let health = 0;
    let damage = 0;

    //const nameRegex = /(?<demon>[^ ,]+.+)/gm;
    //const healthRegex = /(?<health>[^0-9./\*+-])/gm;
    //const healthRegex = /([^\.\/\-+\*0-9]*)/gm;
    // const damageRegex = /(?<damage>[\d\-+.]+)/gm;
    // regex 1 = /(?<damage>[-]*[\d.{1}\d]+)/gm;
    // const damageRegex = /(?<damage>[\d]|[\d\-+.]+)/gm;

    const nameRegex = /(?<demon>[^ ,]+\w*)/gm;
    const healthRegex = /[^\d\+\-*\/\.]/gm;
    const damageRegex = /(?:\+|-)?[0-9]+(?:\.[0-9]+)?/gm;

    for (const demon of demons) {
        let name = demon.match(nameRegex).join('');
        let healthCharacters = demon.match(healthRegex);
        let damageNumbers = demon.match(damageRegex);

        health = 0;

        if (healthCharacters) {

            for (const char of healthCharacters) {
                let charHealth = char.charCodeAt()
                health += charHealth;
            }
        }

        damage = 0;

        if (damageNumbers) {

            let operators = demon.match(/[*\/]+/g);

            for (const num of damageNumbers) {
                damage += Number(num);
            }

            if (operators) {
                operators = operators.join('').split('')

                for (const operator of operators) {
                    if (operator === '*') {
                        damage *= 2;
                    } else if (operator === '/') {
                        damage /= 2;
                    }
                }
            }
        }

        allDemons.push({ name, health, damage });
    }

    allDemons = allDemons.sort((a, b) => a['name'].localeCompare(b['name']));

    for (const object in allDemons) {
        console.log(`${allDemons[object]['name']} - ${allDemons[object]['health']} health, ${Number(allDemons[object]['damage']).toFixed(2)} damage`);
    }
}
solve('M3ph-0.5s-0.5t0.0**');
solve('M3ph1st0**, Azazel');
//solve('Gos/ho');
// solve('m353');
// solve('M3ph-0.5s-0.5t0.0**   ,M3ph1st0**, Azazel    Gos/ho   ,    m353')
