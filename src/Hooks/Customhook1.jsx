import React from "react";
import {useState ,useEffect} from "react";

const Customhook1 = ()=>{
    const [counter , setCounter] = useState();
     
    // Increases the value of counter by 1
       function resetCounter(){
        setCounter(counter + 1);
    }
     
    useEffect(() => {
        // Some logic
        console.log(counter);
    } , [counter]);
     
    const clickedButton = resetCounter;
    return(
        <>
        <h1> custom hook</h1>
            <button onClick={clickedButton}>
               Click here!
            </button></>
    )
}
export default Customhook1;