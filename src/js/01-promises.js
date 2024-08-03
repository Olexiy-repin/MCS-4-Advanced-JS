/*
 * Поведінка промісів в Event Loop (http://latentflip.com/loupe/)
 *
 * Micro та Macro черга
 * Ререндер сторінки при маніпуляціях з DOM
 */

//? Який порядок виконання цього коду?
// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log('3');

//   resolve('4');
// });

// promise.then(result => {
//   console.log(result);
// });

// console.log('5');

//? Який порядок виконання цього коду?
// console.log('1');

// const promise = new Promise((resolve, reject) => {
//   console.log('2');

//   setTimeout(() => {
//     console.log('3');

//     resolve('4');
//   }, 0);
// });

// promise.then(result => {
//   console.log(result);
// });

// console.log('5');

/* 
? Напишіть функцію startCounter(), яка буде виводити лічильник на сторінку.
*/

// const counterEl = document.querySelector('.js-counter');
// let i = 0;

// const startCounter = () => {
//   i += 10;

//   counterEl.innerHTML = i;

//   if (i < 1000) {
//     setTimeout(startCounter, 100);
//   }
// };

// startCounter();
