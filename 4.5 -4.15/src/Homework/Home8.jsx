// обновляется значение при вводе с помощью обработчика события onClick (так как используем функцию)

import React, { useRef } from 'react';

function Home8() {
    const inputRef = useRef(null);

    function handleButtonClick() {
        console.log(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleButtonClick}>Submit</button>
        </div>
    );
}

export default Home8;