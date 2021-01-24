/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром. */

function calcResult(a, b, c ) {
    return (a - b) / c;
}

let x = calcResult(7, 4, 3);

console.log (x);

/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром. */

function calcPower(a, b) {
    return a ** b;
}

function calcPower2_3(a) {
    return [a ** 2, a ** 3];
}

let y = calcPower(4, 2);

console.log (y);

let z = [];

z = calcPower2_3(5);

console.log (z);

/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/

function min(a, b) {
    if (a < b) return a;
      else return b;
}

function max(a, b) {
    if (a > b) return a;
      else return b;
}

x = min(7, 17);

y = max(11, 14);

console.log (x, y);


/*4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.*/

function creatArray() {

    let a = prompt ("Введите число:"),
        b = prompt ("Введите число:"),
        arr = [];

    for (let i = a; i <= b; i++) {
        arr.push(+i);
    }

    return arr;
}

function showArray() {

newarr = creatArray();

console.log (newarr);

}

//showArray();

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.*/

function isEven(a) {

    if (a % 2 == 0) return true;
      else return false;

}

console.log (isEven(7));

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.*/

function selectEven(arr = []) {

    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
        arr1.push(arr[i]);
        }
    }

    return arr1;

}

console.log (selectEven([4, 0, 6, -4, 7, 10, 16, 14]));

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например:
Курс «JS».
*
**
***
****
*****
******
*******
********
*********
*/

function creatPiramid(a) {

    for (let i = 0; i <= a; i++) {

        let arr = [];
        for (let j = 0; j <= (i - 1); j++) {
            if ((arguments.length > 1) && (arguments[1] != ' ')) {
                arr.push(arguments[1]);
            }
              else {
                  arr.push(i);
              }
        }

        console.log (arr.join(''));

    }

}

let piram = creatPiramid(9, 'v');


/* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:
*
***
*****
*******
*********
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник. */

function creatTriangle(a) {

    let arr = [];

    for (let i = 0; i < a; i++) {
            arr = ['*'];

            for (let k = 1; k < a; k++) {
                arr.unshift(' ');
            }

            for (let j = 0; j < i; j++) {
                arr.push('**');
                arr.shift(' ');              
            }

        console.log (arr.join(''));
    }
}

creatTriangle(7);

console.log ('----------------------------------');

function creatTriangleOver(a) {

    let arr = [];

    for (let i = (a - 1); i >= 0; i--) {
            arr = ['*'];

            for (let k = 1; k < a; k++) {
                arr.unshift(' ');
            }

            for (let j = 0; j < i; j++) {
                arr.push('**');
                arr.shift(' ');              
            }

        console.log (arr.join(''));
    }
}

creatTriangleOver(7);

/* 9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.*/

function creatFibonacci(a) {

    let arrFibo = [0, 1];

    for (let i = 1; arrFibo[i] < a; i++) {
        arrFibo.push((arrFibo[(i - 1)] + arrFibo[i]));
    }

    arrFibo.pop();

    return arrFibo;
}

console.log (creatFibonacci(1000));


/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.*/

function calcSumDigits(a) {

    let dig = String(a),
        sumDig = 0;

    for (let i = 0; i < dig.length; i++) {
        sumDig += +dig[i];        
    }

    if (String(sumDig).length == 1) {
    console.log (sumDig);
    }  else {
        calcSumDigits(sumDig);
    }
}

calcSumDigits(3412547);

/* 11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл.*/

n = 0;

function showArrayItems(ar = []) {

    console.log (ar[n]);
    n++;

    if (ar.length > n) {
        showArrayItems(ar);
    }
}

showArrayItems([7, 9, 15, 3]);

/* 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:
*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************
Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.*/

/*function getPersData() {
    
    let themeHW = prompt ("Тема домашней работы:"),
        numberGroup = prompt("Номер группы:"),
        surnameAndName = prompt("ФИО:"),

        arrLength = [themeHW.length, numberGroup.length, surnameAndName.length],

        arrLength2 = arrLength.sort((a, b) => a - b),

        maxLength = arrLength2[0],
        decorFrame = '*';

    for (let i = 0; i < maxLength; i++) {
        decorFrame += '*';
    }

    console.log (decorFrame);
    console.log ('* Домашняя работа: ' + themeHW + ' *');
    console.log ('* Выполнил: студент гр. ' + numberGroup + ' *');
    console.log ('* ' + surnameAndName +' *');
    console.log (decorFrame);
}

getPersData();*/

function alignLines(a, b, c) {

    let arrLength = [a.length, b.length, c.length],
        arrLength2 = arrLength.sort((a, b) => a - b),

        max = arrLength2[2],
        medium = arrLength2[1],
        min = arrLength2[0],

        diff1 = max - medium,
        diff2 = max - min;

    if (a.length == medium) {
        for (let i = 0; i < diff1; i++)
        a += ' ';
    } else if (a.length == min) {
        for (let i = 0; i < diff2; i++)
        a += ' ';
      }

    if (b.length == medium) {
        for (let j = 0; j < diff1; j++)
        b += ' ';
    } else if (b.length == min) {
        for (let j = 0; j < diff2; j++)
        b += ' ';
      }

    if (c.length == medium) {
        for (let l = 0; l < diff1; l++)
        c += ' ';
    } else if (c.length == min) {
        for (let l = 0; l < diff2; l++)
        c += ' ';
      }

    return a, b, c;

}

let a = 'xxxxxxx',
    b = 'xxxxxxxxx',
    c = 'xx';

alignLines(a, b, c);

console.log (a + '*');
console.log (b + '*');
console.log (c + '*');

console.log (a.length);
console.log (b.length);
console.log (c.length);