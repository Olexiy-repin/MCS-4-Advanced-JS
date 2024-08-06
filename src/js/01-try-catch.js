/*
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 */

console.log('First!');

setTimeout(() => {
  try {
    const user = {};

    user = 'Oleksii';
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log('Second!');
