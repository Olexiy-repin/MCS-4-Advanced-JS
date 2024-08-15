/*
 * Return Type
 * Void
 * Never
 * Function Type
 * Optional parameters
 */

//* Return Type

// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(10, 20));

/*
? Реалізуйте функцію getBooksTitles(books),
? яка буде приймати до параметру books масив книг,
? а повертати буде масив із назвами книг.
*/
// const books = [
//   {
//     title: 'JS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 8.5,
//   },
//   {
//     title: 'CSS',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo.',
//     rating: 9,
//   },
// ];

// type Book = {
//   title: string;
//   description: string;
//   rating: number;
// };

// function getBooksTitles(books: Book[]): string[] {
//   return books.map(el => el.title);
// }

// console.log(getBooksTitles(books));

//* Void

// function greet(firstName: string, lastName: string): void {
//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// greet('Oleksii', 'Repin');

//* Never

// function generateError(message: string): never {
//   throw new Error(message);
// }

//* Function Type
// type ForEachCallBack = (el: number, idx: number, arr: number[]) => void;

// function forEachNumbers(items: number[], cb: ForEachCallBack): void {
//   for (let i = 0; i < items.length; i++) {
//     cb(items[i], i, items);
//   }
// }

// forEachNumbers([1, 2, 3, 4], (el, idx, arr) => {
//   console.log(idx, el, arr);
// });

//* Optional parameters
// const greetUser = (firstName: string, lastName?: string): void => {
//   if (lastName === undefined) {
//     console.log(`Welcome ${firstName}`);
//   } else {
//     console.log(`Welcome ${firstName} ${lastName}`);
//   }
// };

// greetUser('Oleksii', 'Repin');
// greetUser('Oleksii');
