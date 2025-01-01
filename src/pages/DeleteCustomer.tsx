import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";

export function DeleteCustomer() {
    const navigation = useNavigate();
    const [customer, setCustomer] = useContext(CustomerContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit() {
        setCustomer((customer) => customer.filter((customer) => customer.email != email));
        navigation('/')
    }

    return (
        <>
            <h2>Delete Customer</h2>
            <br/>

            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)}/>

            <br/>
            <button onClick={handleSubmit}>Delete Customer</button>

        </>
    )
}