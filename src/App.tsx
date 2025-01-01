import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {DashBoard} from "./pages/DashBoard.tsx";
import {ADD} from "./pages/ADD.tsx";
import {Delete} from "./pages/Delete.tsx";
import {Update} from "./pages/Update.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {CustomerProvider} from "./components/CustomerProvider.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout/>,
            children : [
                {path: '', element : <DashBoard/>},
                {path: '/add', element : <ADD/>},
                {path: '/delete', element : <Delete/>},
                {path: '/update', element : <Update/>}
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
