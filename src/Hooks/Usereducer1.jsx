import React from "react";
import { useReducer } from "react";

const Usereducer1 = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "subtract":
                return state - 1;
            case "reset":
                return 0;
            default:
                throw new Error("Unexpected action");
        }
    };
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>usereducer</div>
            <div>
                <h2>{count}</h2>
                <button onClick={() => dispatch("add")}>
                    add
                </button>
                <button onClick={() => dispatch("subtract")}>
                    subtract
                </button>
                <button onClick={() => dispatch("reset")}>
                    reset
                </button>
            </div></>
    )
}
export default Usereducer1;