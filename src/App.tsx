import './App.css'

import {useState} from "react";
import AddValueButton from "./components/AddValueButton.tsx"

function App() {

    const [count, setCount] = useState("Add 1");

    return (
        <>
            {/*<button onClick={() => setCount(count + 1)}>Click : {count}</button>*/}

            <AddValueButton name ={count} onClick={() => setCount(count + 1)}></AddValueButton>
        </>
    )
}

export default App
