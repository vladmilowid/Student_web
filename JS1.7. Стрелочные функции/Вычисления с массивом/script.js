//создаем массив numbers из девяти чисел
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//sum - использует метод reduce() для суммирования всех элементов массива
const sum = numbers.reduce((total, current) => total + current, 0);
document.getElementById('sum').innerText = sum;

//evenNumbers - использует метод filter() для выявления всех четных элементов массива
const evenNumbers = numbers.filter(num => num % 2 === 0);
document.getElementById('even-numbers').innerText = evenNumbers.join(', ');

//doubledNumbers - использует метод map() для умножения каждого элемента на 2
const doubledNumbers = numbers.map(num => num * 2);
document.getElementById('doubled-numbers').innerText = doubledNumbers.join(', ');