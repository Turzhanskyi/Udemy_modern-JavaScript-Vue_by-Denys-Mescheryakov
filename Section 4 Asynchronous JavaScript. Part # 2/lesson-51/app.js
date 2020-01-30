// Promise => resolve ([[PromiseStatus]]: "resolved")
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 1000);
})

console.log(promise);

promise
  .then(x => {
    console.log(x);
    return x + 1;
  })
  .then(y => console.log(y));

promise.then(z => console.log(z));


// Promise => reject, коли виникають помилки ([[PromiseStatus]]: "rejected", [[PromiseValue]]: "error")
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('error'), 1000);
})

console.log(promise1);

promise1
  .then(x => {
    console.log(x);
    return x + 1;
  })
  .then(y => console.log(y))
  .catch(err => console.log(err));