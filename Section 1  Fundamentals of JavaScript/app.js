//                              Тема 5. Типы данных



// однострочный комментарий
/* 
  Многострочные комментарии
*/
/**
 * JSDoc комментарии
 */

/**
 * Типы данных:
 * 1. Примитивные
 * - Number: 2019, 1.5, NaN, Infinity
 * - String: 'Hello', "Hello", `Hello`
 * - Boolean: true, false
 * - Null: null
 * - Undefined: undefined,
 * - Symbol()
 */

// console.log(2019, 1.5);
// console.log(20 * 'asdasd');
// console.log(1 / 0);

// console.log('Hello', "Hello", `Hello`);

// console.log(true, false);

// console.log(null);

// console.log(undefined);

// console.log(Symbol());

/**
 * Типы данных:
 * 2. Объекты. (Reference type) Передаються по ссылке.
 * - Object: { name: 'Denis', age: 30 }
 *  * Array: [1, 2, 3]
 *  * Function: function foo() {}
 *  * Date: new Date()
 *  ....
 */

// console.table({
//   name: 'Denis',
//   age: 30
// });
// console.log([1, 2, 3, 4]);

/**
 * Особености:
 * 1. JS динамически типизированный язык
 * 2. Одна и та же переменная может хранить в себе любой тип данных
 * 3. Нам не нужно определять тип данных при создании переменных
 * 4. Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
 */



//                              Тема 6. Переменные



// var, let, const
// var name = 'Denis';
// console.log(name);
// name = 'Den';
// console.log(name);

// var age;
// console.log(age);
// age = 30;
// console.log(age);

// var $name = 'Ivan';
// var _name = 'Maks';
// var 1name = '';

// var userAge = 30;
// var user_age = 20;
// var UserAge = 40;
// var userage = 10;

// var car;
// console.log(car);
// car = 'bmw';
// var car = 'audi';
// console.log(car);
// console.clear();

// console.log(nickname);
// let nickname = 'dmgame';
// nickname = 'dm';
// console.log(nickname);

// const firstName = 'Tom';
// firstName = 'Jhon';
// const lastName;

// console.log(firstName);

// const user = {
//   name: 'Denis',
//   age: 30
// };

// user.age = 25;

// console.log(user);



//                              Тема 7. Преобразование типов



// let value;

// Number to string
// value = String(10);
// value = String(10 + 40);
// value = (40).toString();

// Boolean to string
// value = String(false);
// Array to string
// value = String([1, 2, 3]);
// Object to string
// value = String({
//   name: 'Denis'
// });

// value = 30 + '' + undefined;
// value = 30 * '5';
// value = false + undefined;

// String to number
// value = Number('23');
// value = Number(false);
// value = Number(null);
// value = Number('false');
// value = Number([1, 2, 3]);

// value = parseInt('200px');
// value = parseFloat('200.212px');

// Boolean
// value = Boolean('hello');
// value = Boolean('');
// value = Boolean(-100);
// value = Boolean(0);
// value = Boolean(undefined);
// value = Boolean(null);
// value = Boolean({});
// value = Boolean([]);

// console.log(value);
// console.log(typeof value);

// let d = new Date();

// get string representation
// let str = d.toString(); // 'Wed Jan 17 2018 16:15:42'
// console.log(str);

// get numeric representation, num of milliseconds since Unix epoch
// let num = d.valueOf(); // 1516198542525
// console.log(num);

// compare with a string representation
// true because d is converted to same string
// console.log(d == str); // true

// compare with numeric representation
// false, because d is not converted to a number via valueOf()
// console.log(d == num); // false

// Result is 'Wed Jan 17 2018 16:15:42Wed Jan 17 2018 16:15:42'
// '+' same to '==' triggers default conversion mode
// console.log(d + d);

// Result is 0, since '-' operator explicitly triggers numeric conversion, not a default one
// console.log(d - d);

// function ToPrimitive(input, preferredType) {

//   switch (preferredType) {
//     case Number:
//       return toNumber(input);
//       break;
//     case String:
//       return toString(input);
//       break
//     default:
//       return toNumber(input);
//   }

//   function isPrimitive(value) {
//     return value !== Object(value);
//   }

//   function toString() {
//     if (isPrimitive(input.toString())) return input.toString();
//     if (isPrimitive(input.valueOf())) return input.valueOf();
//     throw new TypeError();
//   }

//   function toNumber() {
//     if (isPrimitive(input.valueOf())) return input.valueOf();
//     if (isPrimitive(input.toString())) return input.toString();
//     throw new TypeError();
//   }
// }



//                              Тема 8. Числа



// Numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
// value = 5 % 2;
value++;
value--;
++value;
--value;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
value = (0.6 * 10 + 0.7 * 10) / 10;

// Math
value = Math.PI;
value = Math.random();
value = Math.round(2.4);
value = Math.ceil(2.1);
value = Math.floor(2.9);
value = Math.min(2, 12, 15, 0, 12);

value = Math.floor(Math.random() * 10 + 1);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

// console.log(value, arr[value]);