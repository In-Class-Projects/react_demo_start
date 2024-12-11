import './App.css'
import {useState} from "react";
import {Customer} from "./models/Customer.ts";


function App() {
    const [customers, setCustomers] = useState<Customer[]>([])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const addCustomer = () => {
        const newCustomer = new Customer(name, email, phone, address);

        setCustomers((customers) => [...customers, newCustomer]);
    }

    const deleteCustomer = () => {
        setCustomers((customers) => customers.slice(0,-1));
    }

    const deleteCustomerByEmail = () => {
        setCustomers((customers) => customers.filter((customer) => customer.email != email));
    }

    return (
        <>
            <input name={"name"} type="text" placeholder={"Name"} onChange={(e) => setName(e.target.value)}/>
            <input name={"email"} type="text" placeholder={"Email"} onChange={(e) => setEmail(e.target.value)}/>
            <input name={"phone"} type="text" placeholder={"Phone Number"} onChange={(e) => setPhone(e.target.value)}/>
            <input name={"address"} type="text" placeholder={"Address"} onChange={(e) => setAddress(e.target.value)}/>

            <br/>

            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Last Customer</button>
            <button onClick={deleteCustomerByEmail}>Delete customer by email</button>

            <br/>

            {customers.map(customer => (
                <h2 key={customer.email}>{customer.name + " " + customer.email + " " + customer.phone + " " + customer.address}</h2>
            ))}


        </>
    )
}

export default App
