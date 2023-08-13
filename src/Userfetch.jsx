// import React from "react";
// import { useEffect, useState } from "react";

// const Userfetch = () => {
//     const[data,setdata]=useState("");
//     useEffect(() => {
//         // Get todo list
//         fetch('https://64d461f2b592423e469410ba.mockapi.io/api/v1/todo')
//             .then((res) => res.json())
//             .then((json) => {
//                 console.log(json);
//                 setdata(json);
//             })
//             .catch((error) => console.error(error));

//         //POST TODO
//         const request = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 task: 'academia',
//                 status: false,
//                 datetime: '2086-01-22T11:16:18.062Z',
//             }),
//         };
//         let id = 53;
//         fetch(
//             `https://64d461f2b592423e469410ba.mockapi.io/api/v1/todo/${id}`,
//             request,
//         )
//             .then((res) => res.json())
//             .then((json) => {
//                 console.log(json);
//             })
//             .catch((error) => console.error(error));
//     }, []);
//     return (
//         <>
//             <div>todo</div>
//         </>
//     )
// }

// export default Userfetch;
