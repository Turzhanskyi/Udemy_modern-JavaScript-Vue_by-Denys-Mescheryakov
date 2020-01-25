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
// const num1 = 10;
// const num2 = 20;
// let value;

// + * / - %
// value = num1 + num2;
// value = value + 100;
// value += 100;
// value = 5 % 2;
// value++;
// value--;
// ++value;
// --value;

// value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
// value = (0.6 * 10 + 0.7 * 10) / 10;

// Math
// value = Math.PI;
// value = Math.random();
// value = Math.round(2.4);
// value = Math.ceil(2.1);
// value = Math.floor(2.9);
// value = Math.min(2, 12, 15, 0, 12);

// value = Math.floor(Math.random() * 10 + 1);

// const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
// value = Math.floor(Math.random() * arr.length);

// console.log(value, arr[value]);



//                              Тема 9. Строки



// const firstName = 'Denis';
// const lastName = 'Mescheryakov';
// const age = 30;
// const str = 'Hello my name is Denis';

// let value;

// value = firstName + lastName;
// value = firstName + ' ' + lastName;
// value += ' I am ' + age;

// value = firstName.length;
// value = firstName[2];
// value = firstName[4];
// value = lastName[lastName.length - 1];
// value = firstName[firstName.length - 1];

// value = firstName.toUpperCase();
// value = firstName.concat(' ', lastName);

// value = str.indexOf('n', 10);
// value = str.indexOf('!');
// value = str.includes('DENIS');

// value = str.slice(0, 5);
// value = str.slice(0, -3);

// value = str.replace('Denis', 'Den');

// console.log(value);



//                              Тема 10. Шаблонные строки



// const firstName = 'Denis';
// const lastName = 'Mescheryakov';
// const age = 30;

// let str;

// str = 'Hello my name is ' + firstName + ' ' + lastName;

// str = '<ul>' +
//   '<li>First name: ' + firstName + '</li>' +
//   '<li>Last name: ' + lastName + '</li>' +
//   '<li>Age: ' + age + '</li>' +
//   '</ul>';

// console.log(str);

// ES6
// str = `
//   <ul>
//     <li>First name: ${ firstName }</li>
//     <li>Last name: ${ lastName }</li>
//     <li>Age: ${ age }</li>
//     <li>Math.random: ${ Math.random() }</li>
//     <li>5 + 5: ${ 5 + 5 }</li>
//   </ul>
// `;

// document.body.innerHTML = str;



//                              Тема 11. Введение в объекты



// const user = {
//   firstName: 'Denis',
//   age: 30,
//   isAdmin: true,
//   email: 'test@test.com',
//   'user-address': {
//     city: 'Kharkiv'
//   },
//   skills: ['html', 'css', 'js']
// };

// let value;
// let prop = 'skills';

// value = user.firstName;
// value = user['isAdmin'];
// value = user['user-address'];
// value = user['user-address'].city;
// value = user['user-address']['city'];
// value = user[prop][0];

// user.firstName = 'Den';

// value = user.firstName;

// user.info = 'Some info';

// value = user.info;

// user['user-address'].city = 'Kiev';
// user['user-address'].country = 'Ukraine';

// console.log(user.plan);
// user.plan = {};
// user.plan.basic = 'basic';

// console.log(value);
// console.log(user);



//                              Тема 12. Логические операторы, if statement



// >, <, >=, <=, ==, ===, !=, !==

// let value;

// value = 1 > 2;
// value = 2 <= 2;
// value = 1 == 1;
// value = 1 == '1';
// value = 1 === '1';
// value = 1 != '1';
// value = 1 !== '1';
// value = 'a' > 'ab';
// value = 'A'.charCodeAt();

// console.log(value);

// if (условие) {
// actions
// } else {
// else actions
// }

// value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

// || && !
// value = null;

// if (!value) {
//   console.log(value);
// }

// value = [1];

// if (value.length) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = null

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


// let user = {
//   name: null
// };

// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// || &&
// value = 0 || 0 || null;

// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }

// let serverNickname = '';
// let nickname = serverNickname || 'default nickname';

// console.log(nickname);

// value = 1 && 2 && 3;

// productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

// value = 10;

// if (value < 10) {
//   console.log('value < 10', value);
// } else if (value >= 10) {
//   console.log('value >= 10', value);
// } else {
//   console.log('else');
// }



//                              Тема 13. Тернарный оператор. Конструкция switch case



// let a = 1;
// let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }



// выражение ? если true : если false;
// выражение ? если true : выражение ? если true : если false;
// b = a > 0 ? a : b + 1;


// b =  a > 0 ? 2 : a < 0 ? 3 : 0;
// console.log(b);

// console.log(`b: ${b}`);
// let color = 'yellow';

// switch (color) {
//   case 'yellow':
//   case 'red':
//     console.log('Color is red || yellow');
//     break;
//   default:
//     console.log('Default');
// }



//                              Тема 14. Циклы



// while, do while, for, for of, for in

// let i = 10;
// while(i--) {
//   console.log(i);
// }

// do {
//   console.log('action');
// } while(i > 0);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// }

// console.log(res);

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// const users = [
//   {
//     name: 'Denis',
//     age: 30
//   },
//   {
//     name: 'Oleg',
//     age: 12
//   },
//   {
//     name: 'Maks',
//     age: 25
//   },
//   {
//     name: 'Olga',
//     age: 2
//   },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//   usersObj[users[i].name] = users[i];
// }

// console.log(usersObj['Denis']);

// const user = {
//   name: 'Denis',
//   age: 30
// };

// for (let key in usersObj) {
//   console.log(key);
//   console.log(usersObj[key]);
// }

// for (let value of users) {
//   console.log(value);
// }



//                              Тема 15. Введение в функции



// (function(msg) {
//   console.log(msg);
//   function sayHello(firstName = "Default", lastName = "Default") {
//     console.log(firstName, lastName);
//     console.log("Hello world");
//     return `Hello ${firstName} ${lastName}`;
//   }

// let res = sayHello("Denis", "Mescheryakov");
// let res2 = sayHello("Dima", "Mescheryakov") + "!";
// let res3 = sayHello();
// console.log(res3);

// let x = 10;

// function foo(x) {
//   x = 20;
//   console.log(x);
//   return x;
// }

// foo();

// console.log(x);

// const user = {
//   name: "Denis",
//   age: 30
// };

// function getObj(obj) {
//   obj.name = "Den";
// }

// getObj(user);
// console.log(user);

//   const square = function(x) {
//     return x * x;
//   };
// })("Hello world");



//                              Тема 16. Методы массивов


// const numArr = [2, 32, 1234, 54, 323];

// let value;

// value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;

// value = Array.isArray(numArr);
// value = numArr[2];
// numArr[2] = 12;
// value = numArr.indexOf(32);

// value = numArr.push(100);
// value = numArr.pop();
// value = numArr.unshift(111);
// value = numArr.shift();
// value = numArr.slice(0, 2);
// value = numArr.splice(1, 0, "one", "two");
// value = numArr.reverse();
// value = numArr.concat(1, 2);
// value = numArr.join(" ");
// value = "hello world".split(" ");
// console.log(value, numArr);



//                              Тема 17. Функции высшего порядка. Callback.



// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('Denis Mescheryakov');

// function question(job) {
//   const jobsDictionary = {
//     developer: "Что такое JS?",
//     teacher: "Какой предмет вы преподаете?"
//   };

//   return function(name) {
//     return jobsDictionary[job] + " " + name;
//   };
// }

// const developerQustion = question("developer");
// console.log(developerQustion);
// console.log(developerQustion("Denis"));



//                              Тема 18. Что такое this. Контекст вызова функции.



// function getThis() {
//   console.log(this);
// }
// getThis();
// window.getThis();
// console.log(window.getThis);

// function getPrice(currency = "$") {
//   console.log(currency + this.price);
//   return this;
// }

// function getName() {
//   console.log(this.name);
//   return this;
// }

// const prod1 = {
//   name: "Intel",
//   price: 100,
//   getPrice,
//   getName() {
//     console.log(this.name);
//   },
//   info: {
//     information: ["2.3ghz"],
//     getInfo: function () {
//       console.log(this);
//     }
//   }
// };
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

// const prod2 = {
//   name: "AMD",
//   price: 50,
//   getPrice
// };

// prod2.getName = prod1.getName;
// prod2.getPrice();

// prod2.getName();

// let str = "Hello world";
// const reversStr = str
//   .split("") // ['H', 'e'...]
//   .reverse() // ['d', 'l'...]
//   .join(""); // 'dlrow olleH'
// console.log(reversStr);

// const prod3 = {
//   name: "ARM",
//   price: 200,
//   getPrice
//   // getName,
// };

// getPrice.call(prod3, '*');
// getPrice.apply(prod3, ['*']);

// prod3
//   .getName() // prod3
//   .getPrice(); // prod3.getPrice()

// const getPriceBind = prod3.getPrice.bind(prod3, "*");
// console.log(getPriceBind);
// setTimeout(getPriceBind, 1000);



//                              Тема 19. Стрелочные функции



// const plus = (x = 0, y = 0) => x + y;
// const plusRes = plus(1, 2);

// const withoutArgs = () => console.log('Hello world');
// const singleArg = x => x * 2;
// const moreActions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a + b;
// };
// const returnObj = (str = '') => ({
//   value: str,
//   length: str.length,
// });

// function plusFoo(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// plusFoo(1, 2, 3, 'hello');

// const obj = {
//   firstName: 'Denis',
//   age: 30,
//   getFirstName() {
//     console.log(this);
//   },
//   getAgeArrow: null,
//   getAge() {
//     // this.getAgeArrow = () => console.log(this);
//     setTimeout(() => console.log(this));
//   },
// };

// obj.getAge();
// obj.getAgeArrow();



//                              Тема 20. Перебирающие методы массивов



// const users = [{
//     _id: "5cdce6ce338171bb473d2855",
//     index: 0,
//     isActive: false,
//     balance: 2397.64,
//     age: 39,
//     name: "Lucile Finley",
//     gender: "female",
//     company: "ZOXY",
//     email: "lucilefinley@zoxy.com",
//     phone: "+1 (842) 566-3328",
//     registered: "2015-07-12T09:39:03 -03:00"
//   },
//   {
//     _id: "5cdce6ce0aa8d071fa4f4cc5",
//     index: 1,
//     isActive: true,
//     balance: 2608.48,
//     age: 33,
//     name: "Woodward Grimes",
//     gender: "male",
//     company: "FORTEAN",
//     email: "woodwardgrimes@fortean.com",
//     phone: "+1 (960) 436-3138",
//     registered: "2014-09-08T03:24:39 -03:00"
//   },
//   {
//     _id: "5cdce6ce103de120d32d6fe4",
//     index: 2,
//     isActive: true,
//     balance: 1699.99,
//     age: 25,
//     name: "Robinson Coleman",
//     gender: "male",
//     company: "GENMOM",
//     email: "robinsoncoleman@genmom.com",
//     phone: "+1 (852) 543-3171",
//     registered: "2019-04-23T08:24:58 -03:00"
//   },
//   {
//     _id: "5cdce6cebada7a418d8ccb3d",
//     index: 3,
//     isActive: true,
//     balance: 2621.84,
//     age: 25,
//     name: "Austin Benton",
//     gender: "male",
//     company: "ZILIDIUM",
//     email: "austinbenton@zilidium.com",
//     phone: "+1 (977) 573-2627",
//     registered: "2016-08-02T10:08:24 -03:00"
//   },
//   {
//     _id: "5cdce6ced81fe99596d9cef5",
//     index: 4,
//     isActive: true,
//     balance: 1297.31,
//     age: 37,
//     name: "Casandra Stout",
//     gender: "female",
//     company: "ANACHO",
//     email: "casandrastout@anacho.com",
//     phone: "+1 (929) 465-3804",
//     registered: "2018-04-14T11:27:26 -03:00"
//   },
//   {
//     _id: "5cdce6ce6c3ae6c4d6f39e88",
//     index: 5,
//     isActive: false,
//     balance: 2165.49,
//     age: 20,
//     name: "Valencia Carrillo",
//     gender: "male",
//     company: "XEREX",
//     email: "valenciacarrillo@xerex.com",
//     phone: "+1 (977) 522-3378",
//     registered: "2014-02-14T11:45:27 -02:00"
//   }
// ];

// forEach
// filter
// map
// reduce
// some/every
// sort
// find

// forEach
// users.forEach((user, i, arr) => {
//   console.log(user, i, arr);
// });

// filter
// const userLess30 = users.filter(user => user.age < 30);
// console.log(userLess30);
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// Map
// const usersName = users.map(user => user.name);
// const usersName = users.map(user => ({ name: user.name, age: user.age }));
// console.log(usersName);

// Reduce
// const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
// console.log(totalBalance);
// const usersObj = users.reduce((acc, user) => {
//   acc[user._id] = user;
//   return acc;
// }, {});
// console.log(usersObj);

// Some/Every
// const isMale = users.some(user => user.gender === "male");
// const isAllMale = users.every(user => user.gender === "male");
// const isAll18 = users.every(user => user.age > 18);
// console.log(isAll18);

// const user = users.find(user => user.name === "Valencia Carrillo");
// console.log(user);

// Sort
// const strArr = ["Denis", "Bill", "Anna"];
// strArr.sort();
// const numArr = [10, 7, 44, 32];
// numArr.sort((prev, next) => prev - next);
// users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);



//                              Тема 21. Что такое замыкание



// function getFullName(firstName, lastName) {
//   return function() {
//     return `${firstName} ${lastName}`;
//   };
// }

// const getname = getFullName('Denis', 'Mescheryakov');
// // console.log(getname());

// function updateValue(val = 0) {
//   let x = val;
//   return function(num = 0) {
//     return (x += num);
//   };
// }

// const updtVal = updateValue(2);
// const updtVal2 = updateValue(4);
// // console.log(updtVal(1));
// // console.log(updtVal(0));
// // console.log(updtVal2(2));
// // console.log(updtVal2(0));

// function checkCred() {
//   const login = 'test';
//   const password = 'somePassword';

//   return {
//     checkLogin(value) {
//       return login === value;
//     },
//     checkPassword(value) {
//       return password === value;
//     },
//   };
// }

// const check = checkCred();
// // console.log(check);
// // console.log(check.checkLogin('test'));

// function closureExample() {
//   const arrOfFunc = [];
//   let value = '';

//   for (let i = 0; i < 10; i++) {
//     value += i;
//     arrOfFunc.push(function() {
//       console.log(value, i);
//     });
//   }
//   return arrOfFunc;
// }

// const res = closureExample();
// res[0]();
// res[5]();

// var x = 10;

// function foo(a) {
//   var b = 20;

//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     return e * -1;
//   }

//   return bar;
// }



//                              Тема 22. Методы объектов про которые часто забывают.



// let obj1 = {
//   name: 'Denis',
//   info: {
//     skills: ['html', 'css'],
//   },
// };

// let obj2 = {
//   name: 'Ivan',
//   age: 20,
// };

// let newObj = Object.assign({}, obj2, obj1);
// newObj = Object.assign({}, obj1);
// newObj = JSON.parse(JSON.stringify(obj1));
// // console.log(newObj.info === obj1.info);

// let keys = Object.keys(obj2);
// console.log(keys);
// let values = Object.values(obj2);
// console.log(values);
// let entries = Object.entries(obj2);
// console.log(entries);
// let fromEntries = Object.fromEntries([
//   ['a', 'value'],
//   ['b', 'b_value']
// ]);
// console.log(fromEntries);



//                              Тема 23. Деструктуризация


// const user = {
//   firstName: 'Denis',
//   lastName: 'Mescheryakov',
//   age: 25,
//   info: {
//     work: 'EasyCode',
//     skills: ['html', 'css'],
//   },
// };

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName: name, lastName, age: years = 30 } = user;
// const {
//   info: { work, skills },
// } = user;
// console.log(skills);

// const colors = ['white', 'black', 'red', '#89432d'];
// const [w, b, red, green = 'green'] = colors;
// console.log(w, b, red, green);
// const names = ['Denis', 'Ivan', 'Maksim'];
// const [name1, ...otherNames] = names;
// console.log(name1, otherNames);
// const nestedArr = ['hello world', ['key', 'value']];
// const [, [key, value]] = nestedArr;
// console.log(key, value);
// const [...newNames] = names;
// const newNames = [...names];
// console.log(...newNames);
// const colorNames = ['some value', ...colors, ...names];
// console.log(colorNames);
// const newUser = { ...user, age: 30 };
// console.log(newUser);
// const {
//   info: {
//     skills: [html, css],
//   },
// } = newUser;

// console.log(html, css);

// function myPerson({
//   lastName = '&',
//   firstName = '&',
//   info: { skills } = {},
// } = {}) {
//   console.log(skills);
// }

// myPerson(newUser);
// function foo(x, y, ...others) {
//   console.log(arguments);
//   // console.log(Array.prototype.slice.call(arguments));
//   const [...args] = arguments;
//   console.log(others);
// }

// foo(1, 2, 5, 6);
// const numbers = [2, 3];

// function foo2(x, y) {
//   console.log(x, y);
// }

// foo2(...numbers);



//                              Тема 24. Object descriptor



// const car = {
//   brand: 'Audi',
//   year: 2019,
//   get age() {
//     return `Мышина выпущена в ${this.year}`;
//   },
//   set age(value) {
//     this.year = value;
//   },
// };

// Object.defineProperty(car, 'age', {
//   // configurable: false,
//   // enumerable: false,
//   // writable: false,
//   get: function() {
//     return `Мышина выпущена в ${this.year}`;
//   },
// });

// Object.defineProperty(window, 'globalVar', {
//   set: function (value) {
//     console.log(value);
//     debugger;
//   },
// });

// function foo() {
//   globalVar = 10;
// }

// foo();



//                              Тема 25. Объекты обертки. Важные нюансы.


let str = 'Hello world';
// console.dir(String('hello').slice(1, -1));
const strObj = new String('hello');
console.log(strObj);
// console.dir(Number);