import './App.css'

import ButtonComponent from "./components/ButtonComponent.tsx";
import {useState} from "react";

function App() {

    // let content : string = "DashBoard"
    const [count, setCount] = useState(0);

    function handleClick(type){
        setCount(count+1)
    }

    return (
        <>
            <ButtonComponent name = {"Count : "+ count} count={count} onClick={handleClick}></ButtonComponent>
        </>
    )
}

export default App
