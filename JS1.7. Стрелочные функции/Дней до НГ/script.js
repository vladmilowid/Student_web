function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var timeDiff = newYear.getTime() - today.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(dayDiff);
  }
  
  var days = daysUntilNewYear();
  var result = `Малыш, до Нового Года осталось ${days} дней!`;
  
  window.onload = () => document.getElementById("output").innerText = result;