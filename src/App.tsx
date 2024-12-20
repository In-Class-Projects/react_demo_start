import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {DashBoard} from "./pages/DashBoard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {CustomerProvider} from "./components/CustomerProvider.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children : [
                {path: '', element : <DashBoard/>},
                {path: '/add', element : <AddCustomer/>},
                {path: '/delete', element : <DeleteCustomer/>},
                {path: '/update', element : <UpdateCustomer/>}
            ]
        },
    ])

    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes} />
            </CustomerProvider>
        </>
    )
}

export default App
