//? Запит за користувачем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError(`Користувача ${name} не знайдено`);
//     }
//   }, 2000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.log(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах
