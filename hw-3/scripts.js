a = 35;
while (a >= 8) {
	console.log(a);
	a--;
}

a = 89;
while (a >= 11) {
	console.log(a);	
	a--;
}

a = 100; 
let sum = 0;

for (let i = 1; i <= a; i++) {
	sum += i;
}
	
console.log(sum);

a = 7; // считаем сумму чисел каждого числа
sum = 0;

for (i = 1; i <= a; i++) {
	sum = 0;
	
	for (let j = 1; j <= i; j++) {
		sum += j;
	}
	
	console.log('Sum ' + i + ' = ' + sum);
}

a = 8;

while (a <= 56) {
	console.log(a);
	a += 2;	 
}

for (a = 8; a <= 56; a++) {
	if (a % 2 !== 0) continue;

	console.log (a);
}

for (i = 2; i <= 10; i++) {
		
	for (j = 2; j <= 10; j++) {
		sum = i * j;

		console.log(i + ' * ' + j + ' = ' + sum);
	}
}

let n = 1000;
let num = 1;

for (; ; num++) {

	n /= 2;

	if (n < 50) break;

}

console.log ('n' + ' = ' + n + ' num' + ' = ' + num);

/*sum = 0;

for (i = 0; ;i++) {

	n = + prompt ('Введите число', '');
	
	if (isNaN(n)) {
		i--;
		alert ("Error!");
		continue;
	} else 	if ((n == 0) || (n == ''))break;
	
	sum += n;		 
}

let average = sum / i;

console.log ('Sum ' + ' = ' + sum + ' average ' + ' = ' + average);
*/

// задание 10:

n=1372;

sum = 0;

let nStr = String(n);

console.log (nStr.length);

let nlength = nStr.length;

console.log (nlength);

for (i=0; i < nlength; i++) {

	console.log (nStr[i]);

	sum += +nStr[i];

}

console.log (sum);

/*
9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.
*/


