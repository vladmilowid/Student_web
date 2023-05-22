function MyComponent() {
  const sum = 5 + 2;
  return (
    <div>
      <p>Результат сложения 5 и 2: {sum}</p>
    </div>
  );
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

