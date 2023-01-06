 'use strict'
const birthYear = Number(prompt('Введіть рік народження'));
const city = prompt('У якому місті ви живете?');
const sport = prompt('Ваш улюбленний вид спорту?');

const currentYear = new Date().getFullYear();

const age = birthYear ? `${currentYear - birthYear - 1} або ${currentYear - birthYear}` : 'Шкода, що Ви не захотіли ввести свою дату народження';

let userCity;
if (city === 'Київ') {
    userCity = 'Ти живеш у столиці України';
} else if (city === 'Вашингтон') {
    userCity = 'Ти живеш у столиці Сша';
} else if (city === 'Лондон') {
    userCity = 'Ти живеш у столиці Великобританії';
} else if(city === null) {
    userCity = 'Шкода, що Ви не захотіли ввести своє місто'
} else if (city === '') {
    userCity = 'Шкода, що Ви не захотіли ввести своє місто'
}else {
    userCity = 'Ти живеш у місті ' + city;
}

let userSport;
if (sport === 'Футбол') {
    userSport = 'Круто! Хочеш стати Ліонелєм Мессі?';
} else if (sport === 'Теніс') {
    userSport = 'Круто! Хочеш стати Рафаелєм Надалєм?';
} else if (sport === 'Баскетбол') {
    userSport = 'Круто! Хочеш стати Джеймсоном Лєброном,';
} else if (sport === null) {
    userSport = 'Шкода, що Ви не захотіли ввести свій улюбленний спорт';
} else if (sport === '') {
    userSport = 'Шкода, що Ви не захотіли ввести свій улюбленний спорт';
}
 else {
    userSport = `Сподіваюсь ти станеш гарним гравцем у ${sport}`;
}


alert(`${age}\n
${userCity} \n
${userSport}`);

