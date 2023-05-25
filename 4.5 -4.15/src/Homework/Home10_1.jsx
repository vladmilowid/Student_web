import React, { useState } from 'react';

export default function Home10_1() {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('банан');

return (
    <>
    <div>
        <h1 style={{color:'red'}}>Вы нажали {age} раз</h1> 
        <button onClick={() => setAge(age + 1)}>
            Нажми на меня
        </button>
    </div>

    <div>
        <h1 style={{color:'blue'}}>Вы нажали {fruit} раз</h1> 
        <button onClick={() => setFruit(`${fruit} 1`)}>
            Нажми на меня
        </button>
    </div>
    </>
);

}
