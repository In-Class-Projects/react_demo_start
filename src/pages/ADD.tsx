import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {Customer} from "../models/Customer.ts";
import {CustomerContext} from "../components/CustomerProvider.tsx";


export function ADD() {
    const navigation = useNavigate();
    const [customer, setCustomer] = useContext(CustomerContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone, address);
        setCustomer((customer : Customer[]) => [...customer, newCustomer]);
        navigation('/')
    }

    return (
        <>
            <header><h2>Add Customer</h2></header>
            <br/>

            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)} />

            <br/>
            <button onClick={handleSubmit}>Add Customer</button>
        </>
    )
}