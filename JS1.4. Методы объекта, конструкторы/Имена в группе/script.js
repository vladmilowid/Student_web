// определение конструктора Group
function Group() {
    // имена членов группы
    this.names = ["Иван", "Екатерина", "Петр", "Антон", "Мария"];
    
    // метод, выводящий имена группы на страницу
    this.printNames = function() {
      // получаем элемент <p> с id "group-names"
      let pElement = document.getElementById("group-names");
      
      // вывожу имена группы в элемент <p>
      pElement.innerHTML = "Группа: " + this.names.join(", ");
    };
  }
  
  // создание экземпляра объекта Group
  let myGroup = new Group();
  
  // вызов метода printNames
  myGroup.printNames();
  