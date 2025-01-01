
first App.tsx

import './App.css'
import {useReducer, useState} from "react";
import {initialState, NameReducer} from "./reducers/NameReducer.ts";
import {FullName} from "./models/FullName.ts";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [names, dispatch] = useReducer(NameReducer, initialState)

    function onSubmit() {
        const newFullName = new FullName(firstName, lastName);
        dispatch({type : 'PRINT', payload : newFullName})
    }
    return (
        <>
            <input  type="text" placeholder={"First Name"}  onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder={"Last Name"} onChange={(e)=>setLastName(e.target.value)}/>
            <button onClick={()=> onSubmit()}>Print</button>

            <br/>

            {names.map((names : FullName ) => (<div>{names.firstName + ' ' + names.lastName}</div>))}
        </>
    )
}

export default App
