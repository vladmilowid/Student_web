function calculateAge() {
    let birthYear = document.getElementById("birthYear").value;
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    document.getElementById("result").innerHTML = "Возраст: " + age;
}