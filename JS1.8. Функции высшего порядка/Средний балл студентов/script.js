const grades = [3, 4, 5, 4, 3, 5, 4];
//использую reduce() для подсчета суммы всех оценок
const sum = grades.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
//затем делю эту сумму на количество оценок в массиве
const average = sum / grades.length;
//вывожу результат на страницу
document.getElementById("result").innerText = `Средний балл: ${average}`;