function vacation(group,personType,weekDay) {
    let price = 0;
    if (weekDay === 'Friday') {
        if (personType === 'Students') {
            price = 8.45;
            if (group >= 30) {
                price -= price * 0.15;
            }
        } else if (personType === 'Business') {
            price = 10.90;
            if (group >= 100) {
                group -= 10;
            }
        } else if (personType === 'Regular') {
            price = 15;
            if (group >= 10 && group <= 20) {
                price -= price * 0.05;
            }
        }
    } else if (weekDay === 'Saturday') {
        if (personType === 'Students') {
            price = 9.80;
            if (group >= 30){
                price -= price * 0.15;
            }
        } else if (personType === 'Business') {
            price = 15.60;
            if (group >= 100) {
                group -= 10;
            }
        } else if (personType === 'Regular') {
            price = 20;
            if (group >= 10 && group <= 20) {
                price -= price * 0.05;
            }
        }
    } else if (weekDay === 'Sunday') {
        if (personType === 'Students') {
            price = 10.46;
            if (group >= 30) {
                price -= price * 0.15;
            }
        } else if (personType === 'Business') {
            price = 16;
            if (group >= 100) {
                group -= 10;
            }
        } else if (personType === 'Regular') {
            price = 22.50;
            if (group >= 10 && group <= 20) {
                price -= price * 0.05;
            }
        }
    }
    let totalPrice = price * group;
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}