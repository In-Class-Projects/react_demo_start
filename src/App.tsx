import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {DashBoard} from "./pages/DashBoard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";

function App() {

    const routes = createBrowserRouter([
        {path: '', element : <DashBoard/>},
        {path: '/add', element : <AddCustomer/>},
        {path: '/delete', element : <DeleteCustomer/>},
        {path: '/update', element : <UpdateCustomer/>},
    ])

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
