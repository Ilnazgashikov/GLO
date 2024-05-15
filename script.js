'use strict';
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
const rollback = 12;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуг нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуг нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));


switch (true) {
    case fullPrice >= 30000: alert("Даем скидку в 10%");
        break;
    case fullPrice >= 15000 && fullPrice < 30000: alert("Даем скидку в 5%");
        break;
    case fullPrice >= 0 && fullPrice < 15000: alert("Скидка не предусмотрена");
    default: alert("Что то пошло не так");
};


console.log(title);
console.log(screens);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log("Откат посреднику", Math.floor(servicePercentPrice));