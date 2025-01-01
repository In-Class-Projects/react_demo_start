import {Link, useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Modal} from "../components/Model.tsx";
import {Customer} from "../models/Customer.ts";

export function Delete() {
    const navigation = useNavigate();
    const [customer, dispatch] = useContext(CustomerContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit() {
        const deleteCustomer = new Customer(name, email, phone, address);
        dispatch({type:'DELETE_CUSTOMER',payload:deleteCustomer});
        navigation('/')
    }

    return (
        <>
            <h2>Delete Customer</h2>

            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone} setAddress={setAddress}>Delete Customer</Modal>

        </>
    )
}