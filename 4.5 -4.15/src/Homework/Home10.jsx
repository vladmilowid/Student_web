import React, { useState } from 'react';

export default function Home10() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 style={{color:'green'}}>Вы нажали {count} раз</h1> 
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
} 

