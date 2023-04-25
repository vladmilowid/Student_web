//Создаем массив admins, содержащий два объекта администраторов с разными правами доступа.
var admins = [
    {
      name: "Иван Иванов",
      username: "admin",
      password: "qwerty123",
      isAdmin: true
    },
    {
      name: "Петр Петров",
      username: "user",
      password: "password",
      isAdmin: false
    }
  ];

  //считываем логин и пароль пользователя из соответствующих полей в массиве
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    //производим проверку на то, есть ли пользователь с таким логином и паролем в массиве.
    for(var i = 0; i < admins.length; i++) {
      if(username === admins[i].username && password === admins[i].password) {
        if(admins[i].isAdmin) {
          document.getElementById("admin-name").innerHTML = admins[i].name;
          return;
        }
        else {
          alert("Вы не являетесь администратором");
          return;
        }
      }
    }
    
    alert("Неправильный логин или пароль");
  }

/*Если такой пользователь найден, проверяю, является ли он администратором или нет, и далее выводим его имя на странице, 
если он имеет соответствующие права. Если пользователь не найден, или он не является администратором, выводится 
соответствующее сообщение. */