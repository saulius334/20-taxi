const Taxi = require('./Taxi');

console.clear()

const jonas = new Taxi('Jonas');
const maryte = new Taxi('Maryte');
const stasys = new Taxi('Stasys');
const ona = new Taxi('Ona');

jonas.intro();
console.log(`Sveiki, as Jonas ir kilometro kaina su manimi yra 1.00 Eur.`)
maryte.intro();
console.log(`Sveiki, as Maryte ir kilometro kaina su manimi yra 1.00 Eur.`)
stasys.intro();
console.log(`Sveiki, as Stasys ir kilometro kaina su manimi yra 1.00 Eur.`)
ona.intro();
console.log(`Sveiki, as Ona ir kilometro kaina su manimi yra 1.00 Eur.`)

jonas.updatePrice(0.9);
console.log(`Jonas nustate nauja kilometro kaina - 0.90 Eur.`)
ona.updatePrice(2);
console.log(`Ona nustate nauja kilometro kaina - 2.00 Eur.`)
maryte.updatePrice(1.2);
console.log(`Maryte nustate nauja kilometro kaina - 1.20 Eur.`)

jonas.ride(5);
maryte.ride(7);
stasys.ride(2);
ona.ride(2);

jonas.stats();
console.log(`Jonas nuvaziavo 5 km ir uzdirbo 4.50 Eur.`)
maryte.stats();
console.log(`Maryte nuvaziavo 7 km ir uzdirbo 8.40 Eur.`)
stasys.stats();
console.log(`Stasys nuvaziavo 2 km ir uzdirbo 2.00 Eur.`)
ona.stats();
console.log(`Ona nuvaziavo 2 km ir uzdirbo 4.00 Eur.`)

maryte.ride(13);
stasys.ride(7);
jonas.ride(4);
ona.ride(15);
jonas.ride(5);
maryte.ride(3);
stasys.ride(12);
ona.ride(6);
jonas.ride(4);
maryte.ride(1);
stasys.ride(9);
ona.ride(10);

jonas.stats();
console.log(`Jonas nuvaziavo 18 km ir uzdirbo 16.20 Eur.`)
maryte.stats();
console.log(`Maryte nuvaziavo 24 km ir uzdirbo 28.80 Eur.`)
stasys.stats();
console.log(`Stasys nuvaziavo 30 km ir uzdirbo 30.00 Eur.`)
ona.stats();
console.log(`Ona nuvaziavo 33 km ir uzdirbo 66.00 Eur.`)

jonas.updatePrice(1.5);
console.log(`Jonas nustate nauja kilometro kaina - 1.50 Eur.`)
ona.updatePrice(2.3);
console.log(`Ona nustate nauja kilometro kaina - 2.30 Eur.`)
stasys.updatePrice(1.5);
console.log(`Stasys nustate nauja kilometro kaina - 1.50 Eur.`)

jonas.ride(5);
maryte.ride(3);
stasys.ride(12);
ona.ride(6);
jonas.ride(4);
maryte.ride(1);
stasys.ride(9);
ona.ride(10);

jonas.stats();
console.log(`Jonas nuvaziavo 27 km ir uzdirbo 29.70 Eur.`)
maryte.stats();
console.log(`Maryte nuvaziavo 28 km ir uzdirbo 33.60 Eur.`)
stasys.stats();
console.log(`Stasys nuvaziavo 51 km ir uzdirbo 61.50 Eur.`)
ona.stats();
console.log(`Ona nuvaziavo 33 km ir uzdirbo 102.80 Eur.`)