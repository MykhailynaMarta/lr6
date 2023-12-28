// Створення нового об'єкту XMLHttpRequest
var xhr = new XMLHttpRequest();

// Налаштування параметрів запиту (GET-запит, URL)
xhr.open('GET', 'products.json', true);

// Встановлення обробників подій
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Обробка відповіді сервера
    var responseData = JSON.parse(xhr.responseText);
    console.log(responseData);
  }
};

// Відправка запиту на сервер
xhr.send();

// Використання fetch API для виконання GET-запиту
// fetch('url_до_вашого_серверу')
//   .then(function(response) {
//     // Перевірка статусу відповіді
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
    
//     // Парсинг JSON з відповіді
//     return response.json();
//   })
//   .then(function(data) {
//     // Обробка отриманих даних
//     console.log(data);
//   })
//   .catch(function(error) {
//     // Обробка помилок
//     console.error('There has been a problem with your fetch operation:', error);
//   });
