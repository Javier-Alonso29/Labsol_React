import { useState } from "react";
import "..\\App.css";

const Counter = () => {

    const [counters, setCounters] = useState({
        left: 0,
        rigth: 0,
        clicks: 0,
        message: "Mensaje",
    });

    const [clicks, setClicks] = useState([]);

    const handleLeft = (e) => {
        setCounters({
            ...counters,
            left: counters.left + 1,
            clicks: counters.clicks + 1,
        });

        setClicks((prev) => [...prev, "L"]);
    };

    const par = counters.left % 2 === 0;

    const handleRigth = (e) => {
        setCounters({
            ...counters,
            rigth: counters.rigth + 1,
            clicks: counters.clicks + 1,
        });

        setClicks((prev) => [...prev, "R"]);
    };

    return (
        <div className="container">
            <h1>Counter</h1>
            {par ? 'par' : 'Impar'}
            <div className="row">
                {counters.left}
                <button onClick={handleLeft}>+1</button>
                <button onClick={handleRigth}>+1</button>
                {counters.rigth}

            </div>

            <p>Total clicks: {counters.clicks}</p>
                {counters.message}

            <p>{clicks}</p>

        </div>
    );
};

export default Counter;