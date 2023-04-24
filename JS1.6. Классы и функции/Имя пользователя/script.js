class User {
    constructor(name) {
      this.name = name;
    }
  
    showName() {
      document.getElementById("username").textContent = this.name;
    }
  }
  
  const user = new User("Владислав");
  user.showName();
  
 /*Создаем класс User. Конструктору присваивается имя пользователя, подаваемое на вход, а метод showName выводит его на экран.
 Затем создаем новый объект User и вызваем метод showName на экземпляре user. В результате в блоке <p> на странице должен 
 появиться текст "Владислав".*/

 