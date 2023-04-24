//создаем массив emails
let emails = ["naruto.saske@yandex.ru", "gul.doc@google.com", "hika_1@mail.ru", "midzuka@google.com"];

/*Функция filterEmails принимает два аргумента: массив адресов и строку для фильтрации. Функция возвращает новый массив, 
содержащий только те адреса, которые содержат строку для фильтрации. */
function filterEmails() {
  let input = document.getElementById("filterInput");
  let filterString = input.value.toLowerCase();
  let filteredEmails = emails.filter(email => email.includes(filterString));
  let emailList = document.getElementById("emailList");

  emailList.innerHTML = "";

  filteredEmails.forEach(email => {
    let li = document.createElement("li");
    li.textContent = email;
    emailList.appendChild(li);
  });
}