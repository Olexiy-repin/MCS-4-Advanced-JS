/*
 * Function overloads
 * Generics
 */

//* Function overloads
//? =================================

// function concat(a, b) {}

// const result1 = concat(10.4, 20);
// const result2 = concat('20', '30');

// console.log(result1); // '1020'
// console.log(result2); // '2030'

//? =================================
// function merge(arr1, arr2) {
//   const result = [...arr1, ...arr2];

//   return result;
// }

// const result1 = merge([1, 2], [3, 4]);
// const result2 = merge(['1', '2'], ['3', '4']);

// console.log(result1); // [1, 2, 3, 4]
// console.log(result2); // ['1', '2', '3', '4']

//* Generics
//? =================================
// function merge(arr1, arr2) {
//   const result = [...arr1, ...arr2];

//   return result;
// }

// const result1 = merge([1, 2], [3, 4]); // [1, 2, 3, 4]
// const result2 = merge(['1', '2'], ['3', '4']); // [1, 2, 3, 4]

// console.log(result1); // [1, 2, 3, 4]
// console.log(result2); // ['1', '2', '3', '4']

/*
? Реалізуйте дженерик last(), який витягує останній елемент з масиву.
*/

// const result1 = last([3, 2]);
// const result2 = last(['hello', 'world']);

// console.log(result1); // 2
// console.log(result2); // world

//* Generics Type
/*
? Реалізуйте тип MyArr, який буде описувати обʼєкт із властивістю items та
? методом forEach.
?
? У властивості items буде зберігатися масив, це може бути, як масив рядків, так і масив чисел.
? Метод forEach, має працювати, як Array.prototype.forEach. 
*/

// const myArrStrings: MyArr<string> = {
//   items: ['hello', 'world', '!'],

//   forEach(callback) {
//     for (let i = 0; i < this.items.length; i++) {
//       callback(this.items[i], i, this.items);
//     }
//   },
// };

// console.log(myArrStrings.items);

// const myArrNumbers: MyArr<number> = {
//   items: [1, 2, 3],

//   forEach(callback) {
//     for (let i = 0; i < this.items.length; i++) {
//       callback(this.items[i], i, this.items);
//     }
//   },
// };

// console.log(myArrNumbers.items);

//* Generics, multiple parameters types
/*
? Реалізуйте функцію updateData(data, dataForUpdate), яка буде оновлюваті данні.
*/

// const result1 = updateData(
//   {
//     firstName: 'Lizzie',
//     lastName: 'Ortega',
//     email: 'sijev@ve.ro',
//     phone_number: '(369) 669-2267',
//   },
//   { email: 'paiw@azoehiisi.bw' }
// );

// console.log(result1);

// const result2 = updateData(
//   {
//     title: 'HTML',
//     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, earum?',
//     rating: 9,
//   },
//   { rating: 10 }
// );

// console.log(result2);
