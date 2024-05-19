let title = 'firstPeoject';
let screens = "Простые, Cложные, Интерактивные";
let screenPrice = 88;
let rollback = 13;
let fullPrice = 150000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(screenPrice+'$');
console.log(fullPrice+'$');

console.log(screens.toLocaleLowerCase().split(","));

console.log(fullPrice*(rollback/100));
