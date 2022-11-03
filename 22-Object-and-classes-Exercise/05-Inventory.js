function heroesData(input) {
    let arr = [];

    for (const line of input) {
        let heroes = {};
        let [heroName, level, items] = line.split(' / ');
        heroes.hero = heroName;
        heroes.level = Number(level);
        heroes.item = items;
        arr.push(heroes)
    }

    arr.sort((p1, p2) =>
        (p1.level > p2.level) ? 1 : (p1.level < p2.level) ? -1 : 0);

    arr.forEach(hero => {
        console.log(`Hero: ${hero.hero}\nlevel => ${hero.level}\nitems => ${hero.item}`);
    });
}

heroesData([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])