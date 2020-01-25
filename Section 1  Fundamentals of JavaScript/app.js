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
var name = 'Denis';
console.log(name);
name = 'Den';
console.log(name);

var age;
console.log(age);
age = 30;
console.log(age);

var $name = 'Ivan';
var _name = 'Maks';
// var 1name = '';

var userAge = 30;
var user_age = 20;
var UserAge = 40;
var userage = 10;

var car;
console.log(car);
car = 'bmw';
// var car = 'audi';
console.log(car);
console.clear();

// console.log(nickname);
let nickname = 'dmgame';
nickname = 'dm';
console.log(nickname);

const firstName = 'Tom';
// firstName = 'Jhon';
// const lastName;

console.log(firstName);

const user = {
  name: 'Denis',
  age: 30
};

user.age = 25;

console.log(user);