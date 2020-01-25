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

// let a = 'block';
// switch (a) {
//   case 'block':
//     console.log(a);
//     break;
//   case 'none':
//     console.log(a);
//     break;
//   case 'inline':
//     console.log(a);
//     break;
//   default:
//     console.log('other');
// }

// 13.2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

// let b = 'inline1';

// b === 'block' ? console.log('block') : b === 'none' ? console.log('none') : b === 'inline' ? console.log('inline') : console.log('other');

// var firstCheck = false,
//   secondCheck = false,
//   access = firstCheck ? "Доступ запрещен" : secondCheck ? "Доступ запрещен" : "Доступ разрешен";

// console.log(access);



//                              Тема 14. Циклы



// 14.1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

// const str = 'i am in the easycode';
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//   str[i - 1] === ' ' || i === 0 ? newStr += str[i].toUpperCase() : newStr += str[i];
// }

// console.log(newStr);

// 14.2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).



// 14.3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.



// 14.4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

// const str1 = 'JavaScript is a pretty good language';
// let newStr1 = '';

// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] === ' ') {
//     continue
//   } else {
//     newStr1 += str[i];
//   }
// }

// console.log(newStr1);

// 14.5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.



// 14.6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.



//                              Тема 15. Введение в функции



// 15.1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

// function multiply() {
//   if (!arguments.length) return 0;

//   let resTask1 = 1;
//   for (let i = 1; i < arguments.length; i++) {
//     if (!isNaN(arguments[i])) {
//       resTask1 *= arguments[i];
//     }
//   }
//   console.log(resTask1);
//   return resTask1;
// }

// multiply(1, 2, 3, 7, "str", 2);

// 15.2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

// function reverseString(str) {
//   let resTask2 = str
//     .split("")
//     .reverse()
//     .join("");
//   console.log(resTask2);
//   return resTask2;
// }

// reverseString("test hello");

// 15.3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод

// function getCodeStringFromText(str) {
//   let strSpace = str.split("").join(" ");

//   console.log(strSpace);
// }

// getCodeStringFromText("hello");

// 15.4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

// function guessNumber(num) {
//   if (num < 1 || num > 10) {
//     console.log("Число повинно бути не більше 10 та не менше 0");
//     return;
//   }

//   const ramdom = Math.ceil(Math.random() * 10);
//   ramdom === num ?
//     console.log("Ви виграли!!!") :
//     console.log(`Ви не вгадали. Ваше число: ${num}, а випало: ${ramdom}`);
// }

// guessNumber(8);

// 15.5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]



// 15.6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]



// 15.7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

// function changeCollection() {
//   let resTask7 = [];
//   for (let i = 0; i < arguments.length; i++) {
//     arguments[i].shift();
//     resTask7.push(arguments[i]);
//   }
//   console.log(resTask7);
//   return resTask7;
// }

// changeCollection([2, 5, 6], [4, 7, 9, 10]);

// 15.8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

// const users = [{
//     name: "Denis",
//     age: 29,
//     gender: "male"
//   },
//   {
//     name: "Ivan",
//     age: 20,
//     gender: "male"
//   }
// ];

// function funcGetUsers(arr, key, value) {
//   let resTask8 = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) {
//       resTask8.push(arr[i]);
//     }
//   }
//   console.log(resTask8);
//   return resTask8;
// }

// funcGetUsers(users, "age", 20);



//                              Тема 17. Функции высшего порядка. Callback.



// 17.1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

// function firstFunc(arr, handler) {
//   let res = 'New value: ';

//   for (let i = 0; i < arr.length; i++) {
//     res += handler(arr[i]);
//   }
//   return res;
// }

// const resTask1 = firstFunc(['my', 'name', 'is', 'Vitalii'], function (item) {
//   return item[0].toUpperCase() + item.slice(1);
// });

// console.log(resTask1);

// const resTask2 = firstFunc([10, 20, 30], function (item) {
//   return item * 10 + ' ';
// });

// console.log(resTask2);

// const resTask3 = firstFunc([{
//   age: 38,
//   name: 'Vitalii'
// }, {
//   age: 20,
//   name: 'Aaron'
// }], function (item) {
//   // return item.name + ' is ' + item.age + ' , ';    or
//   return `${item.name} is ${item.age}, `;
// });

// console.log(resTask3);

// const resTask4 = firstFunc(['abc', '123'], function (item) {
//   return item
//     .split("")
//     .reverse()
//     .join("") + ' ';
// });

// console.log(resTask4);


// 17.2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 

// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.

// function every(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!callback(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// const resTask5 = every([1, 3, 7, 23, 21, 'abc'], function (num) {
//   return typeof num === 'number';
// });

// console.log(resTask5);



//                              Тема 18. Что такое this. Контекст вызова функции.



// 18.1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

// const rectangle = {
//   width: 5,
//   height: 15,
//   getSquare: function () {
//     return this.width * this.height;
//   }
// }

// console.log(rectangle.getSquare());

// 18.2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

// const price = {
//   price: 10,
//   discount: '15%',
//   getPrice: function () {
//     return price.price
//   },
//   getPriceWithDiscount: function () {
//     let price = this.price;
//     let discount = price * Number.parseInt(this.discount) / 100;
//     console.log(discount);
//     return price - discount;
//   }
// }

// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

// 18.3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

// const object = {
//   height: 10,
//   getHeightPlusOne: function () {
//     return this.height += 1;
//   }
// }

// console.log(object.height);
// console.log(object.getHeightPlusOne());
// console.log(object.height);

// 18.4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

// const numerator = {
//   value: 1,
//   double: function () {
//     return this.value *= 2
//   },
//   plusOne: function () {
//     return this.value += 1
//   },
//   minusOne: function () {
//     return this.value -= 1
//   }
// }
// ????????????  console.log(numerator.double().plusOne().plusOne().minusOne());
// console.log(numerator.value);



// 18.5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

// let prod1 = {
//   price: 45,
//   counts: 30,
//   getTotalPrice() {
//     return this.price * this.counts;
//   }
// }

// console.log(prod1.getTotalPrice());

// 18.6. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

// let prod2 = {
//   price: 5,
//   counts: 100
// }

// console.log(prod1.getTotalPrice.call(prod2));

// 18.7. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

// let sizes = {
//     width: 5,
//     height: 10
//   },
//   getSquare = function () {
//     return this.width * this.height
//   }

// console.log(getSquare.call(sizes));

// 18.8. let element = {
//   height: 25,
//   getHeight: function () {return this.height;}
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

// let element = {
//   height: 25,
//   getHeight: function () {
//     return this.height;
//   }
// }

// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight());



//                              Тема 19. Стрелочные функции



// 19.1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

// function sum() {
//   const params = Array.prototype.slice.call(arguments);

//   if (!params.length) return 0;

//   return params.reduce(function (prev, next) {
//     return prev + next;
//   });
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum());



//                              Тема 20. Перебирающие методы массивов



// 20.1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const newArr = arr.map(num => ({
//   digit: num,
//   odd: num % 2 !== 0,
// }));

// console.log(newArr);


// 20.2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

// const arr1 = [12, 4, 50, 1, 0, 18, 40];

// function isZero(num) {
//   return num === 0;
// }

// console.log(arr1.some(isZero));


// 20.3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

// const arr2 = ['yes', 'hello', 'no', 'easycode', 'what'];

// console.log(arr2.some(arr2.lenght > 3));


// 20.4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

// const stringArr = [{
//     char: "a",
//     index: 12
//   }, {
//     char: "w",
//     index: 8
//   }, {
//     char: "Y",
//     index: 10
//   }, {
//     char: "p",
//     index: 3
//   }, {
//     char: "p",
//     index: 2
//   },
//   {
//     char: "N",
//     index: 6
//   }, {
//     char: " ",
//     index: 5
//   }, {
//     char: "y",
//     index: 4
//   }, {
//     char: "r",
//     index: 13
//   }, {
//     char: "H",
//     index: 0
//   },
//   {
//     char: "e",
//     index: 11
//   }, {
//     char: "a",
//     index: 1
//   }, {
//     char: " ",
//     index: 9
//   }, {
//     char: "!",
//     index: 14
//   }, {
//     char: "e",
//     index: 7
//   }
// ];

// function getStringRFromArray(arr) {
//   if (!Array.isArray(arr)) {
//     return console.log('it is not an array')
//   }
//   return arr
//     .slice()
//     .sort((prev, next) => prev.index - next.index)
//     .reduce((acc, current) => (acc += current.char), '');
// }

// console.log(getStringRFromArray(stringArr));

// 20.5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]




// 20.6. Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Отсортировать их по возрастающему количеству ядер (cores).



// 20.7. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

// let products = [{
//     title: 'prod1',
//     price: 5.2
//   }, {
//     title: 'prod2',
//     price: 0.18
//   },
//   {
//     title: 'prod3',
//     price: 15
//   }, {
//     title: 'prod4',
//     price: 25
//   },
//   {
//     title: 'prod5',
//     price: 18.9
//   }, {
//     title: 'prod6',
//     price: 8
//   },
//   {
//     title: 'prod7',
//     price: 19
//   }, {
//     title: 'prod8',
//     price: 63
//   }
// ];

// function filterCollection(arr, min, max) {
//   return arr
//     .slice()
//     .sort((prev, next) => prev.price - next.price)
//     .filter(product => product.price >= min && product.price <= max);
// }

// console.log(filterCollection(products, 15, 30));


//                              Тема 21. Что такое замыкание



// 21.1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.


// 21.2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)


// 21.3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5


// 21.4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100