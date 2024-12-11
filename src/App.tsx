import './App.css'
import {useState} from "react";


function App() {

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
    });

    return (
        <>
            <input type="text" placeholder={"First Name"} onChange= {(e) =>{
                setCustomer({...customer, firstName : e.target.value});
            }}/>
            <input type="text" placeholder={"Last Name"} onChange= {(e) =>{
                setCustomer({...customer, lastName : e.target.value});
            }}/>

            <br/>

            {customer.firstName + " " + customer.lastName}
        </>
    )
}

export default App
