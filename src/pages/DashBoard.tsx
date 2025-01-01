import {Customer} from "../models/Customer.ts";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {useContext} from "react";

export function DashBoard() {
    const [customers, dispatch] = useContext(CustomerContext);
    return (
        <>
            <h2>DashBoard</h2>
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone + ' '+ customer.address }</div>))}

        </>
    )

}