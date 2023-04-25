// Создаем объект "Клиент банка" с символьными свойствами
var client = {
    name: 'Миловидов Владислав',
    accountNumber: '123456789',
    balance: '$100000'
};

// Выводим свойства объекта "Клиент банка"
document.write('<h2>Клиент банка:</h2>');
document.write('<p>Имя: ' + client.name + '</p>');
document.write('<p>Номер счета: ' + client.accountNumber + '</p>');
document.write('<p>Баланс: ' + client.balance + '</p>');

// Создаем объект "Работник клиники" с символьными свойствами
var worker = {
    name: 'Светлаана Петрова',
    position: 'Медсестра',
    salary: '$8000'
};

// Выводим свойства объекта "Работник клиники"
document.write('<h2>Работник клиники:</h2>');
document.write('<p>Имя: ' + worker.name + '</p>');
document.write('<p>Должность: ' + worker.position + '</p>');
document.write('<p>Зарплата: ' + worker.salary + '</p>');

// Создаем объект "Гражданин РФ" с символьными свойствами
var citizen = {
    name: 'Михаил Рыбаков',
    passportNumber: '123456789',
    age: 27
};

// Выводим свойства объекта "Гражданин РФ"
document.write('<h2>Гражданин РФ:</h2>');
document.write('<p>Имя: ' + citizen.name + '</p>');
document.write('<p>Номер паспорта: ' + citizen.passportNumber + '</p>');
document.write('<p>Возраст: ' + citizen.age + '</p>');