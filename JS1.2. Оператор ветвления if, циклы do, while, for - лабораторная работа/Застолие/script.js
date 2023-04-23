function checkCount() {
    var count = document.getElementById("count").value; // Получаю значение поля ввода
    if (count == 1) { // Если значение == 1, то вывожу сообщение и прекращаю проверку
      document.getElementById("output").innerHTML = "Хорошо, спасибо!";
      return;
    }
    else { // Иначе, прошу еще по одной и повторяется проверка
      document.getElementById("output").innerHTML = "Еще по одной? Го?";
    }
    document.getElementById("count").value = ""; // Очищаем поле ввода
  }
  