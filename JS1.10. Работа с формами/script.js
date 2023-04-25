const form = document.getElementById('login-form');
const usernameInput = form.querySelector('input[name="username"]');
const passwordInput = form.querySelector('input[name="password"]');
const rememberMeCheckbox = form.querySelector('input[name="remember-me"]');

// Загрузка сохраненных данныхы
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
if (savedUsername && savedPassword) {
    usernameInput.value = savedUsername;
    passwordInput.value = savedPassword;
    rememberMeCheckbox.checked = true;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    // Проверка пароля
    if (passwordInput.value.length < 6) {
        alert('Длина пароля должна составлять не менее 6 символов');
        return;
    }

    // Сохранение регистрационных данных, если установлен флажок "Запомнить меня".
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('password', passwordInput.value);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

});
