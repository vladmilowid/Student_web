function checkFirstDigit() {
    // Получаем значение из текстового поля
    const inputText = document.getElementById('inputField').value;

    // Проверяем первый символ
    if (inputText.charAt(0) === '1' || inputText.charAt(0) === '2' || inputText.charAt(0) === '3') {
        document.getElementById('result').innerHTML = 'Первая цифра 1, 2 или 3';
    } else {
        document.getElementById('result').innerHTML = 'нет';
    }

    if (inputText.includes("89160954354")) {

        // Проверяем наличие номера телефона в строке
        document.getElementById('result').innerHTML += ' и содержит мой номер телефона';
    }
}
