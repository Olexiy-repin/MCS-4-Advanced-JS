//* Створення нової дати
// const date = new Date('2024-07-22');

// console.dir(date);

//* Методи дати

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());

// date.setFullYear(2025);

// console.dir(date);

//? Створіть об'єкт date для дати: 10 вересня 2022 року, 3 години 12 хвилин.
// const date = new Date('2022-09-10T03:12');
// const date = new Date(2022, 8, 10, 3, 12);

// console.log(date);

/*
? Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
? 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/
// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   const day = date.getDay();

//   return days[day];
// };

// const date = new Date('2023-09-15');

// console.log(date);

// console.log(getWeekDay(date));

/*
? Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
? Параметри:
? year – рік з чотирьох цифр, наприклад, 2012.
? month – місяць від 0 до 11.
? Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2016, 2));

//? Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//   const now = new Date();
//   const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//   return (tomorrow - now) / 1000;
// };

// console.log(getSecondsToTomorrow());
