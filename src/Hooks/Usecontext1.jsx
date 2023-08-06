import React from "react";
import { useContext,useState } from "react";

const Usecontext1 = ()=>{
    const [user, setUser] = useState("parent");
    return(
        <>
        <h1>usecontext</h1>
        <p>{`Hello ${user}!`}</p>
      <Component2 user={user} /></>
    )
}

function Component2({ user }) {
    return (
      <>
        <p>child</p>
        <Component3 user={user} />
      </>
    );
  }

  function Component3({ user }) {
    return (
      <>
        <p>new born baby</p>
      </>
    );
  }

export default Usecontext1;