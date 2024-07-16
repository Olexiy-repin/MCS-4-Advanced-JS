/*
 * LocalStorage
 */

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const item = {
//   title: 'Some item',
//   description: 'Lorem ipsum dolor sit amet.',
//   price: 5000,
// };

// sessionStorage.setItem('item-info', JSON.stringify(item));
// sessionStorage.setItem('test', 'Hello World!');

/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const itemInfoFromLS = JSON.parse(sessionStorage.getItem('item-info'));

// console.log(itemInfoFromLS);

// console.log(sessionStorage.getItem('test'));

/*
 * Видалення
 */

// sessionStorage.clear();
// sessionStorage.removeItem('test');

/*
 * LocalStorage не може зберігати функції
 */

// const fn = function () {};

// localStorage.setItem('some-fn', fn);

// console.log(JSON.parse(localStorage.getItem('some-fn')));
