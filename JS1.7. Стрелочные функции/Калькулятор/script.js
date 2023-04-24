const calculate = () => {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const operator = document.getElementById("operator").value;
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
  
    let result;
    switch (operator) {
      case "add":
        result = firstNumber + secondNumber;
        break;
      case "subtract":
        result = firstNumber - secondNumber;
        break;
      case "multiply":
        result = firstNumber * secondNumber;
        break;
      case "divide":
        result = firstNumber / secondNumber;
        break;
      default:
        result = "Некорректный оператор";
    }
  
    document.getElementById("result").value = result;
  };
  