// Создаю объект покупателя
var customer = {
	name: "Миловидов Владислав",
	phone: "+7 (916) 456-78-90",
	email: "v.milow@mail.com",
	address: "ул. Молодцова, 10",
	city: "Москва"
};

// Вывожу информацию о покупателе на страницу
document.getElementById("name").textContent = customer.name;
document.getElementById("email").textContent = customer.email;
document.getElementById("city").textContent = customer.city;

//Чтобы выводить текст использую textContent, а не innerHTML.
//Так как это более безопасный способ, так как textContent не будет интерпретировать как HTML любую введенную пользователем строку.