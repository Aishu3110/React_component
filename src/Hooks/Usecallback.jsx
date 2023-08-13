import React from "react";
import { useState, useCallback } from "react";

const Usecallback = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    const funccount = new Set();

    const incrementCounter = () => {
        setCount(count + 1)
    }
    const decrementCounter = () => {
        setCount(count - 1)
    }

    const incrementNumber = () => {
        setNumber(number + 1)
    }

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    alert(funccount.size);

    return (
        <>
            <div>usecallback</div>
            <div>
                Count: {count}
                <button onClick={incrementCounter}>
                    Increase counter
                </button>
                <button onClick={decrementCounter}>
                    Decrease Counter
                </button>
                <button onClick={incrementNumber}>
                    increase number
                </button>
            </div></>
    )
}
export default Usecallback;