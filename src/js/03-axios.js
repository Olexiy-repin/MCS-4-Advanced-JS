/*
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

import axios from 'axios';

/*
 * Read (GET)
 */

// const getBooks = () => {
//   return axios.get('https://66abb9ed636a4840d7cbb5cd.mockapi.io/books');
// };

// try {
//   const response = await getBooks();

//   console.log(response);
// } catch (err) {
//   console.log(err);
// }

/*
 * Create (POST)
 */

// const addBook = newBook => {
//   return axios.post('https://66abb9ed636a4840d7cbb5cd.mockapi.io/books', newBook);
// };

// try {
//   const response = await addBook({
//     title: 'Друга тестова книга з CSS',
//     author: 'Я',
//     genres: ['CSS'],
//     rating: 9,
//   });

//   console.log(response);
// } catch (err) {
//   console.log(err);
// }

// addBook({
//   title: 'Тестова книга з HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => console.log(error));

/*
 * Update (PUT/PATCH)
 */

// const updateBookById = (dataForUpdate, bookId) => {
//   return axios.put(`https://66abb9ed636a4840d7cbb5cd.mockapi.io/books/${bookId}`, dataForUpdate);
// };

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 10)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// updateBookById({ rating: 1 }, 11)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
 * Delete (DELETE)
 */

// const removeBook = bookId => {
//   return axios.delete(`https://66abb9ed636a4840d7cbb5cd.mockapi.io/books/${bookId}`);
// };

// removeBook(15)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });
