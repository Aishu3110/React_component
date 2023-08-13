import React from "react";
import { useState, useMemo } from "react";

const Usememo1 = () => {
    const [number, setNumber] = useState(0)
    const squaredNum = squareNum(number);
    const [counter, setCounter] = useState(0);

    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>usememo</h1>
            <input type="number" placeholder="Enter a number"
                value={number} onChange={onChangeHandler}>
            </input>

            <div>OUTPUT: {squaredNum}</div>
            <button onClick={counterHander}>Counter ++</button>
            <div>Counter : {counter}</div></>
    )
}

function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}
export default Usememo1;