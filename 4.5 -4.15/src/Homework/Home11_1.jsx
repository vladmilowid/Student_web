import React from 'react';

function App() {
    const name = 'World';
    const isLoggedIn = true;
    const numbers = [1, 2, 3, 4, 5];

    const styles = {
        color: 'red',
        backgroundColor: 'blue',
    };

    function Button(props) {
        return <button style={props.style}>{props.text}</button>;
    }

    const listItems = numbers.map((number) => <li>{number}</li>);

    return (
        <div>
            <h1>Hello, {name}!</h1>
            {isLoggedIn ? (
                <Button text="Log out" style={{ backgroundColor: 'red' }} />
            ) : (
                <Button text="Log in" style={{ backgroundColor: 'green' }} />
            )}
            <ul>{listItems}</ul>
            <h2 style={styles}>Welcome to my website!</h2>
        </div>
    );
}

export default App;
