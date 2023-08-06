import React from "react";
import { useEffect,useState } from "react";

const Useeffect1 = ()=>{
    const[countdown,setcountdown] = useState(0);

    useEffect(()=>{
    const interval =setInterval(()=>{
      setcountdown(countdown+1)
    },1000);
    return() => clearInterval(interval);
  })
    return(
        <>
        <h1>UseEffect</h1>
        <div>countdown value:{countdown}</div></>
    )
}
export default Useeffect1;