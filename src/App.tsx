import './App.css'

import ButtonComponent from "./components/ButtonComponent.tsx";
import {useState} from "react";

function App() {

    // let content : string = "DashBoard"
    const [content, setContent] = useState('Default Value');


    function handleClick(type:string){
        console.log('click')
        alert(type + ' clicked')
        setContent(type)

    }
    return (
        <>
            <ButtonComponent name = "DashBoard" onClick={handleClick}></ButtonComponent>
            <ButtonComponent name = "Add Customer" onClick={handleClick}></ButtonComponent>
            <ButtonComponent name = "Delete Customer" onClick={handleClick}></ButtonComponent>
            <br/>
            {content}
        </>
    )
}

export default App
