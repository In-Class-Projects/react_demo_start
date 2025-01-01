import './App.css'
import {useReducer, useState} from "react";
import {initialState, NameReducer} from "./reducers/NameReducer.ts";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [names, dispatch] = useReducer(NameReducer, initialState)
    return (
        <>
            <input  type="text" placeholder={"First Name"}  onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder={"Last Name"} onChange={(e)=>setLastName(e.target.value)}/>
            <button onClick={()=> dispatch({type: 'PRINT', payload: {firstName, lastName}})}>Print</button>

            <br/>

            {names.firstName + ' ' + names.lastName}

        </>
    )
}

export default App
