function findQuarter() {
    let min = document.getElementById("min-input").value;

    // Определяем четверть часа с помощью оператора switch-case
    let quarter;
    switch (true) {
        case min >= 0 && min < 15:
            quarter = "Первой четверти";
            break;
        case min >= 15 && min < 30:
            quarter = "Второй четверти";
            break;
        case min >= 30 && min < 45:
            quarter = "Третьей четверти";
            break;
        default:
            quarter = "Четвертой четверти";
            break;
    }

    document.getElementById("result").innerText = `${min} минуты находятся в ${quarter} часа.`;
}