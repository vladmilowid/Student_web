function Timer() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft === 0 ? (
        <h1>Время вышло!</h1>
      ) : (
        <h1>Осталось времени: {timeLeft} секунд</h1>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
