import React from "react";
import {useState} from 'react';

const Usestate1 = ()=>{
    const [name,setname]=useState("Aishwarya");
    const [age,setage]=useState("22");
    return(
        <>
        <h1>UseState</h1>
        <p>I am  {name}</p>
        <p>Age of myself:{age}</p>
        <button type="button" onClick={() => setage("23")}>updated age</button>
        </>
    )
}
export default Usestate1;