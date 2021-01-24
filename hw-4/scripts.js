/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log (arr[i]);
}

/*2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7] Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.*/

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr1.length; i++) {

    if ((arr1[i] > -10) && (arr1[i] < -3)) console.log (arr1[i]);
}

/* 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите. */

let arr2 = [];

/*let i = 0;

while (i < 35) {
    arr2[i] = (i + 23);
    i++;
}

for (let i = 0; i < 35; i++) {
    arr2[i] = (i + 23);
} //вариант
*/

for (let i = 23; i < 58; i++) {
    arr2.push(i);
}

console.log (arr2);

let result = 0;

for (let i = 0; i < 35; i++) {
    result += arr2[i];
}

console.log (result);

 /* 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */

 let arr3 = ['10', '20', '30', '50', '235', '3000'];

 for (let i = 0; i < arr3.length; i++) {

    switch (arr3[i][0]) {
        case '1' :
        case '2' :
        case '5' :
                
            console.log (arr3[i]);
    }
}

/* 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/

let arrWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrWeek.length; i++) {

    switch (arrWeek[i]) {
        case '5':
            let sut = arrWeek[i];   
            document.write (sut.bold() + ' ');
        case '6':
            let sun = arrWeek[i];                   
            document.write (sun.bold()); // Почему-то не работает bold()

        default:
            document.write (arrWeek[i] + ' ');
    }
}

/* 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length. */

let arr4 = [1, 5, 7, 9, 11];

arr4.push(77);

console.log (arr4[arr4.length - 1]);

/* 7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.*/

/*let arr5 = [];

for (let i = 0; ; i++) {
    let n =  prompt ('Введите число', ' ');

    if ((n == ' ') || (n == null)) break;

    arr5[i] = n;            
}

console.log (arr5);

let arr5s = arr5.sort((a, b) => a - b);

console.log (arr5s);*/

/* 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.*/

let arr6 = [12, false, 'Текст', 4, 2, -5, 0];

let j = arr6.length - 1;

while (j >= 0) {

    console.log (arr6[j]);
    j--;
}

arr6.reverse();

console.log (arr6);

/*9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/

let arr7 = [5, 9, 21, , , 9, 78, , , , 6];

let emp = 0;

for (let i = 0; i < arr7.length  ; i++) {

    if (arr7[i] == undefined) emp++;

}

console.log (emp);


/* 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].*/

let arr8 = [48, 9, 0, 4, 21, 15, 11, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    arr9 = [1, 8, 0, 13, 5, 76, 8, 7, 0, 10, 22, 0, 2, 3, 2],
    arr10 = [1, 8, 13, 0, 76, 8, 7, 22, 2, 3, 2],
    sumArr = 0;

for (let i = arr8.indexOf(0); i <= arr8.lastIndexOf(0); i++) {

    if ((arr8.lastIndexOf(0) == arr8.indexOf(0))) {
        sumArr = 0;
        break;        
    } else sumArr += arr8[i];

}

console.log (sumArr);

sumArr = 0;

for (let i = arr9.indexOf(0); i <= arr9.lastIndexOf(0); i++) {

    if ((arr9.lastIndexOf(0) == arr9.indexOf(0))) {
        sumArr = 0;
        break;        
    } else sumArr += arr9[i];

}

console.log (sumArr);

sumArr = 0;

for (let i = arr10.indexOf(0); i <= arr10.lastIndexOf(0); i++) {

    if ((arr10.lastIndexOf(0) == arr10.indexOf(0))) {
        sumArr = 0;
        break;        
    } else sumArr += arr10[i];

}

console.log (sumArr);

/*11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране:
*/

let arrTriangle = [
    [' ', ' ', ' ', '^'],
    [' ', ' ', '^', '^', '^'],
    [' ', '^', '^', '^', '^', '^'],
    ['^', '^', '^', '^', '^', '^', '^'],
];

let triangle1 = arrTriangle[0].join(''),
    triangle2 = arrTriangle[1].join(''),
    triangle3 = arrTriangle[2].join(''),
    triangle4 = arrTriangle[3].join('');
    
console.log (triangle1);
console.log (triangle2);
console.log (triangle3);
console.log (triangle4);

//alert (triangle);

let arrTriangle1 = [' ', ' ', ' ', ' ', '^', '\n',
 ' ', ' ', '^', '^', '^', '\n', ' ', '^', '^', '^', '^', '^', '\n', '^', '^', '^', '^', '^', '^', '^'];

let triangle5 = arrTriangle1.join('');

alert (triangle5);

