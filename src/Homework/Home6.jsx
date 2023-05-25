import React, { useState } from "react";

function Home6(props) {
    const [isShown, setIsShown] = useState(false);

    const toggleIsShown = () => {
        setIsShown(!isShown);
    };
    return (
        <div>
            <button onClick={toggleIsShown}>
                Нажми чтоб показать имя
            </button>
            {isShown && <p>Имя - {props.name}, Возраст - {props.age}</p>}
        </div>
    );
}

export default Home6;