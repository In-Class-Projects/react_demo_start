import './App.css'
import DashBoard from "./components/LoginComponents.tsx";
import {LoginComponents} from "./components/LoginComponents.tsx";
import {ReactElement} from "react";


function App() {

    const isLogging : boolean = false;

    let  content: ReactElement;

    if (isLogging) {
        content = <DashBoard/>
    } else {
        content = <LoginComponents/>
    }

    return (
        <>
            {content}
            {isLogging ? <DashBoard /> : <LoginComponents/>}
        </>
    )
}

export default App
