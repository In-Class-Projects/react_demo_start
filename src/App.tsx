import './App.css'

import AddValueButton from "./components/addValueButton";
import {useState} from "react";

function App() {

    // let content : string = "DashBoard"
    const [count, setCount] = useState(0);

    function handleClick(type){
        setCount(count+1)
    }

    return (
        <>
            <AddValueButton name = {"Count : "+ count} count={count} onClick={handleClick}></AddValueButton>
        </>
    )
}

export default App
