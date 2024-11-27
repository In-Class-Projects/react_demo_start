import './App.css'
import Item from "./components/item.tsx";
import {Customer} from "./components/item.tsx";

function App() {
    return (
        <>
            <Item title={itemsList[0].title} desc={itemsList[0].desc}></Item>
            <Item title={itemsList[1].title} desc={itemsList[1].desc}></Item>
            <Item title={itemsList[2].title} desc={itemsList[2].desc}></Item>

            <Customer {...customerList[0]}/>
            <Customer {...customerList[1]}/>
            <Customer {...customerList[3]}/>
        </>
    )
}

const itemsList = [
    {
        title: "Item 1",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        title: "Item 2",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        title: "Item 3",
        desc: "Lorem ipsum dolor sit amet",
    }
]

const customerList = [
    {
        title: "Customer Boy",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        title: "Customer Girl",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        title: "Customer other",
        desc: "Lorem ipsum dolor sit amet",
    }
]

export default App
