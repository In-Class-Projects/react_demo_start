import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {Customer} from "../models/Customer.ts";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Modal} from "../components/Model.tsx";


export function ADD() {
    const navigation = useNavigate();
    const [customer, dispatch] = useContext(CustomerContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone, address);
        dispatch({type:'ADD_CUSTOMER', payload:newCustomer});
        navigation('/')
    }

    return (
        <>
            <header><h2>Add Customer</h2></header>

            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone} setAddress={setAddress}>Add Customer</Modal>

        </>
    )
}