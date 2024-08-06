/*
 * Синтаксис async/await
 * try...catch
 */

// const foo = async (num1, num2) => {
//   return num1 + num2;
// };

// console.log(foo(10, 20));

//? Запит за книгами і обробка відповіді через async/await
// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://66abb9ed636a4840d7cbb5cd.mockapi.io/boo');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchBooks();

//? Запит за книгами і обробка відповіді через async/await та then()/catch()
// const fetchBooks = async () => {
//   const response = await fetch('https://66abb9ed636a4840d7cbb5cd.mockapi.io/books');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// fetchBooks()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Запит за книгами і обробка відповіді через async/await на верхньому рівні модуля
// const fetchBooks = async () => {
//   try {
//     const response = await fetch('https://66abb9ed636a4840d7cbb5cd.mockapi.io/bos');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const data = await fetchBooks();

// console.log(data);

//? Є «звичайна» функція foo. Як можна всередині неї отримати результат виконання async-функції?
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   return response.json();
// };

// const foo = () => {
//   // ...що тут написати?
//   // щоб викликати fetchPosts() і дочекатися результату від async-функції
//   // не забувайте, тут не можна використовувати "await"

//   fetchPosts()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// foo();
