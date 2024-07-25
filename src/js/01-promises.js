/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
// https://66178982ed6b8fa43482ed8c.mockapi.io/books

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     const isOk = Math.random() > 0.5;

//     if (isOk) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// };

// const promise = new Promise(executor);

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .finally(() => {
//     console.log('Preloader stop!');
//   })
//   .then(result => {
//     console.log(result);

//     return 100;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   resolve(2);
// });

// promise.then(result => {
//   console.log(result);
// });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
