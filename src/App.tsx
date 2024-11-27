import './App.css'
import Item from "./components/item.tsx";
import {Customer} from "./components/item.tsx";

function App() {

    return (
        <>
            <Item title={"RAD 1"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Item>
            <Item title={"RAD 2"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Item>
            <Item title={"RAD 3"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Item>

            <Customer title={"Customer 1"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Customer>
            <Customer title={"Customer 2"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Customer>
            <Customer title={"Customer 3"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}></Customer>
        </>
    )
}


export default App
