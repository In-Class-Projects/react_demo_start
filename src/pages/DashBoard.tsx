import {Link} from "react-router";

export function DashBoard() {
    return (
        <>
            DashBoard

            <br/>

            <Link to={'/add'} >Add Customer</Link>
            <Link to={'/delete'} >Delete Customer</Link>
            <Link to={'/update'} >Update Customer</Link>

        </>
    )
}