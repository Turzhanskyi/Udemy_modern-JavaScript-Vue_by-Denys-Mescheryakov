//                              Тема 8. Числа



// 8.1. Получить число pi из Math и округлить его до 2-х знаков после точки

// let pi = Number(Math.PI.toFixed(2));
// console.log(pi);

// 8.2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

// let maxNumber = Math.max(5, 11, 16, 12, 51, 12, 13, 51);
// let minNumber = Math.min(5, 11, 16, 12, 51, 12, 13, 51);
// console.log("Максимальне число:" + maxNumber + ", а мінімальне:" + minNumber);

// 8.3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

// let random1 = Number(Math.random().toFixed(2));
// console.log(random1);

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

// let x = 5;
// let random2 = Math.random() * x;
// console.log(random2);

// 8.4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

// let sumFix = (0.6 + 0.7).toFixed(1);
// console.log(sumFix);

// 8.5. Получить число из строки ‘100$’

// let strToNumber = parseFloat("100$");
// console.log(strToNumber);



//                              Тема 10. Шаблонные строки



// let string = ‘some test string’;
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 10.1. Получить первую и последнюю буквы строки

let string = 'some test string';

let task1 = `перша буква ${string[0]}, а остання - ${string[string.length - 1]}`;
console.log(task1);

// 10.2. Сделать первую и последнюю буквы в верхнем регистре

let task2 = string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase();
console.log(task2);

// 10.3. Найти положение слова ‘string’ в строке

let task3 = string.indexOf('string');
console.log(task3);

// 10.4. Найти положение второго пробела (“вручную” ничего не считать)

let task4 = string.lastIndexOf(' ');
console.log(task4);

// 10.5. Получить строку с 5-го символа длиной 4 буквы

let task5 = string.substr(5, 4);
console.log(task5);

// 10.6. Получить строку с 5-го по 9-й символы

let task6 = string.substring(5, 9);
console.log(task6);

// 10.7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)

let task7 = string.substring(0, (string.length - 6));
console.log(task7);


// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

let a = 20;
let b = 16;
string = a.toString() + b.toString();
console.log(string);