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

// let string = 'some test string';
// let task1 = `перша буква ${string[0]}, а остання - ${string[string.length - 1]}`;
// console.log(task1);

// 10.2. Сделать первую и последнюю буквы в верхнем регистре

// let task2 = string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase();
// console.log(task2);

// 10.3. Найти положение слова ‘string’ в строке

// let task3 = string.indexOf('string');
// console.log(task3);

// 10.4. Найти положение второго пробела (“вручную” ничего не считать)

// let task4 = string.lastIndexOf(' ');
// console.log(task4);

// 10.5. Получить строку с 5-го символа длиной 4 буквы

// let task5 = string.substr(5, 4);
// console.log(task5);

// 10.6. Получить строку с 5-го по 9-й символы

// let task6 = string.substring(5, 9);
// console.log(task6);

// 10.7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)

// let task7 = string.substring(0, (string.length - 6));
// console.log(task7);

// 10.8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”

// let a = 20;
// let b = 16;
// string = a.toString() + b.toString();
// console.log(string);



//                              Тема 11. Введение в объекты



// 11.1. Создать объект с полем product, равным ‘iphone’
// 11.2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 11.3. Добавить поле details, которое будет содержать объект с полями model и color
// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

// let task
// task = {
//   product: 'iphone'
// };

// task.price = 1000;
// task.currency = 'dollar';
// task.details = {
//   model: 'I10',
//   color: 'black'
// };
// console.log(task);




//                              Тема 12. Логические операторы, if statement



// 12.1. Чему равно а, почему?
// let a = 0 || 'string';
// string
// let a = 1 && 'string';
// string
// let a = null || 25;
// 25
// let a = null && 25;
// null
// let a = null || 0 || 35;
// 35
// let a = null && 0 && 35;
// null



// 12.2. Что отобразится в консоли. Почему?
// 12 + 14 + '12'
// 2612
// 3 + 2 - '1'
// 4
// '3' + 2 - 1
// 31
// true + 2
// 1
// +'10' + 1
// 11
// undefined + 2
// NaN
// null + 5
// 5
// true + undefined
// NaN



// 12.3. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

// let value = "hidden";

// if (value === "hidden") {
//   value = "visible";
// } else {
//   value = "hidden";
// }

// або через тернальний оператор
// value = value === "hidden" ? "visible" : "hidden";



// 12.4. Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let num = 2;

// if (num === 0) {
//   num = 1;
// } else if (num < 0) {
//   num = "less then zero";
// } else if (num > 0) {
//   num *= 10;
// }

// 12.5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

// let car = {
//   name: "Lexus",
//   age: 10,
//   create: 2008,
//   needRepair: false
// };

// if (car.age > 5) {
//   console.log("Need Repair");
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }

// 12.6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

// let item = {
//   name: "Intel core i7",
//   price: "100$",
//   discount: "20%"
// };
// let price = parseFloat(item.price);
// let discount = parseFloat(item.discount);
// let isValid = !isNaN(discount) && !isNaN(price);
// console.log(isValid);

// if (isValid) {
//   item.priceWithDiscount = (price * (100 - discount)) / 100;
//   console.log(item.priceWithDiscount);
// } else {
//   console.log(item.price);
// }

// 12.7. Дан следующий код:
// let product = {
//     name: “Яблоко”,
//     price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

// let product = {
//   name: "Яблоко",
//   price: "18$"
// };
// let min = 10;
// let max = 20;
// let price1 = parseFloat(product.price);
// let isValidPrice = price1 >= min && price1 <= max;

// if (isValidPrice) {
//   console.log(product.name);
// } else {
//   console.log('товар не знайдено');
// }

// isValidPrice ? console.log(product.name) : console.log("товар не знайдено");



//                              Тема 13. Тернарный оператор. Конструкция switch case



// 13.1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }

// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = 'block';
switch (a) {
  case 'block':
    console.log(a);
    break;
  case 'none':
    console.log(a);
    break;
  case 'inline':
    console.log(a);
    break;
  default:
    console.log('other');
}

// 13.2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

let b = 'inline1';

b === 'block' ? console.log('block') : b === 'none' ? console.log('none') : b === 'inline' ? console.log('inline') : console.log('other');

var firstCheck = false,
  secondCheck = false,
  access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";

console.log(access);