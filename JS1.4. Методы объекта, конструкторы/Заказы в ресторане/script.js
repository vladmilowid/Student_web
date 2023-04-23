//  объекты пользователей
var users = [
    { name: "Владислав", age: 23, email: "vladis@mail.ru" },
    { name: "Ирина", age: 34, email: "irin@mail.ru" },
    { name: "Стас", age: 26, email: "stas@mail.ru" },
  ];
  
  // объекты заказов
  var orders = [
    {
      id: 1,
      user: "Владсилав",
      date: new Date("2021-06-01"),
      price: 1100,
      restaurant: "McDonald's",
    },
    {
      id: 2,
      user: "Ирина",
      date: new Date("2021-06-02"),
      price: 2000,
      restaurant: "KFC",
    },
    {
      id: 3,
      user: "Стас",
      date: new Date("2021-06-01"),
      price: 1500,
      restaurant: "Burger King",
    },
  ];
  
  // объекты ресторанов
  var restaurants = [
    { name: "McDonald's", address: "ул. Молодцова, 12" },
    { name: "Burger King", address: "ул. Калинина, 32" },
    { name: "KFC", address: "ул. Шокальского, 21" },
  ];
  
  // Вывожу пользователей, у которых возраст больше 28 лет
  var filteredUsers = users.filter(function (user) {
    return user.age > 28;
  });
  
  var usersDiv = document.getElementById("users");
  filteredUsers.forEach(function (user) {
    var userP = document.createElement("p");
    userP.textContent = "Имя: " + user.name + ", возраст: " + user.age;
    usersDiv.appendChild(userP);
  });
  
  // Вывожу заказы, сделанные пользователем "Екатерина" и сумму заказов по каждому ресторану
  var ivansOrders = orders.filter(function (order) {
    return order.user === "Екатерина";
  });
  
  var ordersDiv = document.getElementById("orders");
  var restaurantOrders = {};
  ivansOrders.forEach(function (order) {
    if (!restaurantOrders.hasOwnProperty(order.restaurant)) {
      restaurantOrders[order.restaurant] = 0;
    }
  
    restaurantOrders[order.restaurant] += order.price;
  
    var orderP = document.createElement("p");
    orderP.textContent =
      "Заказ #" +
      order.id +
      " от " +
      order.date +
      " в ресторане " +
      order.restaurant +
      ", стоимость: " +
      order.price +
      " руб.";
    ordersDiv.appendChild(orderP);
  });
  
  // Вывожу рестораны и адреса, у которых заказано на сумму более 1300 руб.
  var filteredRestaurants = restaurants.filter(function (restaurant) {
    var totalOrders = orders
      .filter(function (order) {
        return order.restaurant === restaurant.name;
      })
      .reduce(function (sum, order) {
        return sum + order.price;
      }, 0);
  
    return totalOrders > 1300;
  });
  
  var restaurantsDiv = document.getElementById("restaurants");
  filteredRestaurants.forEach(function (restaurant) {
    var restaurantP = document.createElement("p");
    restaurantP.textContent =
      "Ресторан " + restaurant.name + ", адрес: " + restaurant.address;
    restaurantsDiv.appendChild(restaurantP);
  });
  