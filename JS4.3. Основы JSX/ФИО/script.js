function MyComponent() {
    const fullName = 'Миловидов Владислав Игоревич';
    const age = 23;
    return (
        <div>
            <p>Меня зовут {fullName}, мне {age} года</p>
        </div >
    );
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
);