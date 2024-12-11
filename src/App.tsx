import './App.css'
import {useState} from "react";


function App() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <>
            <input className={"button"} type="text" placeholder={"First Name"} onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder={"Last Name"} onChange={e => setLastName(e.target.value)} />

            <br/>

            {firstName + " " + lastName}
        </>
    )
}

export default App
