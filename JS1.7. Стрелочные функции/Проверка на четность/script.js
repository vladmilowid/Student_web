var checkEven = function(num) {
    return num % 2 === 0;
  };
  
  var button = document.getElementById('check-button');
  var input = document.getElementById('number-input');
  var result = document.getElementById('result-paragraph');
  
  button.addEventListener('click', function() {
    var number = parseInt(input.value, 10);
  
    if (isNaN(number)) {
      result.innerText = 'Введите корректное число!';
    } else if (checkEven(number)) {
      result.innerText = 'Это число четное!';
    } else {
      result.innerText = 'Это число нечетное!';
    }
  });


/*В этом примере мы объявляем Function Expression checkEven, которая принимает один аргумент (число) и возвращает true, 
если это число четное, и false в противном случае. Затем мы привязываем функцию к клику на кнопку, которая вызывает checkEven 
с переданным ей значением из текстового поля. */