const number = +prompt('Загадайте цифру от 1 до 9', '');

switch (number) {
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2');
        break;
    case 3:
        alert('Вы ввели число 3');
        break;
    case 4:
        alert('Вы ввели число 4');
        break;
    case 5:
        alert('Вы ввели число 5');
        break;
    case 6:
        alert('Вы ввели число 6');
        break;
    case 7:
        alert('Вы ввели число 7');
        break;
    case 8:
    case 9:
        alert('Вы ввели число 8, а может и 9');
        break;
    default:
        alert('Вы ввели число не из диапазона от 1 до 9');
        break;
}