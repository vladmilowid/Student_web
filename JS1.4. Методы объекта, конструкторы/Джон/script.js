let user = {
    name: "Джон",
    age: 30
  };
  
  /*
  user.sayHi = function() {
    alert("Привет!");
  };*/
  
  user.sayHi = function() {
    let element = document.getElementById("content");
    element.innerHTML = "Привет, я " + this.name + " и мне " + this.age + " лет!";
  };
  
  user.sayHi();

/*Этот код объявляет объект "user" со свойствами "name" и "age". Затем добавляется метод "sayHi" в объект "user", который 
выводит "Привет!" при вызове. Далее возводится метод "sayHi" для объекта "user", что запускает метод и выводит "Привет!" 
в окне оповещения.*/