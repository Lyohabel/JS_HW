/*
let name = prompt ('Как Вас зовут?');

let age = prompt ('Сколько Вам лет?');

let city = prompt ('В каком городе Вы проживате?');

let phone = prompt ('Ваш номер телефона?');

let email = prompt ('Ваш адрес электронной почты?');

let company = prompt ('Ваше место работы?');

document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. ' + 'Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: телефон - ' + phone + ', эл. почта ' + email + '.');

let yearOfBirth = 2020 - age;

document.write(name + ' родился в ' + yearOfBirth + '-м году.');

let n1 = 7;

    n2 = 2;

    n3 = 4;

    n4 = 3;

    n5 = 1;

    n6 = 9;

if (n1 + n2 + n3 == n4 + n5 + n6) {

    alert('Yes!');

} else {

    alert('No!');

}
*/

let a = 1;

if (a > 0) {

    document.write('Верно ');

} else {

    document.write('Неверно ');

}

a = 0;

if (a > 0) {

   document.write('Верно ');

} else {

    document.write('Неверно ');

}

a = -3;

if (a > 0) {

    document.write('Верно\n');

} else {

    document.write('Неверно ');

}

a = 10;
let b = 2;

console.log(a + b, a - b, a * b, a / b);

if ((a + b) > 1) {

    console.log((a + b) ** 2);  

}

if (((a > 2) && (a < 11)) || ((b >= 6) && (b < 14))) {

    console.log('Верно'); 

} else {

    console.log('Неверно'); 

}

let n = 59;

if (n <= 15) {

    console.log('1-ая четверть часа');

} else if ((n > 15) && (n <= 30)) {

    console.log('2-ая четверть часа'); 

} else if ((n > 30) && (n <= 45)) {

    console.log('3-ая четверть часа'); 

} else /*if ((n > 45) && (n <= 59))*/ {

    console.log('4-ая четверть часа'); 

}

let days = 31;

switch (days) {

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:

        console.log('1-ая декада');
        break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:

        console.log('2-ая декада');
        break;

    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:

        console.log('3-ая декада');
        break;

    default:
        console.log('31-е число');    
}

days = 480;

let years = days / 365;

let months = days / 31;

let weeks = days / 7;

let hours = days * 24;

let minuts = hours * 60;

let seconds = minuts * 60;

if (weeks < 1) {

    document.write('0 лет, ' + ' 0 месяцев, ' + ' меньше недели, ' + hours + ' часов, ' + minuts + ' минут, ' + seconds +' секунд.');

} else if (months < 1) {

    document.write('0 лет, ' + ' меньше месяца, ' + weeks + ' недель, ' + hours + ' часов, ' + minuts + ' минут, ' + seconds +' секунд.');

} else if (years < 1) {

    document.write('Меньше года, ' + months + ' месяцев, ' + weeks + ' недель, ' + hours + ' часов, ' + minuts + ' минут, ' + seconds +' секунд.');

} else {

    document.write(years + ' года/лет, ' + months + ' месяцев, ' + weeks + ' недель, ' + hours + ' часов, ' + minuts + ' минут, ' + seconds +' секунд.');

}

days = 262;

let month;

let season;

switch (true) {

    case days <= 31:
        month = 'январь';
        season = ', зима';
        break;

    case days > 31 && days <= 59:
        month = 'февраль';
        season = ', зима';
        break;

    case days > 59 && days <= 90:
        month = 'март';
        season = ', весна';
        break;

    case days > 90 && days <= 120:
        month = 'апрель';
        season = ', весна';
        break;

    case days > 120 && days <= 151:
        month = 'май';
        season = ', весна';
        break;

    case days > 151 && days <= 181:
        month = 'июнь';
        season = ', лето';
        break;

    case days > 181 && days <= 212:
        month = 'июль';
        season = ', лето';
        break;

    case days > 212 && days <= 243:
        month = 'август';
        season = ', лето';
        break;

    case days > 243 && days <= 273:
        month = 'сентябрь';
        season = ', осень';
        break;

    case days > 273 && days <= 304:
        month = 'октябрь';
        season = ', осень';
        break;

    case days > 304 && days <= 334:
        month = 'ноябрь';
        season = ', осень';
        break;

    case days > 334 && days <= 365:
        month = 'декабрь';
        season = ', зима';
        break;       

}

console.log(month + season);

