const isPalindrome = (str) => {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

const checkPalindrome = () => {
  const surname = document.getElementById('surname').value;
  const result = document.getElementById('result');
  if (isPalindrome(surname)) {
    result.textContent = "Ваша фамилия является палиндромом!";
  } else {
    result.textContent = "Ваша фамилия не является палиндромом.";
  }
};

