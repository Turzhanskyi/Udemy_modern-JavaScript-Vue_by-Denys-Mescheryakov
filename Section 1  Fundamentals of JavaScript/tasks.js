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