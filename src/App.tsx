import './App.css'

import Item from "./components/item.tsx";
import {Customer} from "./components/item.tsx";

function App() {

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

    const customerArray = [];

    for (const cusArrayElement of customerList) {
        customerArray.push(
            <Customer title={cusArrayElement.title} desc={cusArrayElement.desc}/>
        );
    }

    return (
        <>
            {itemsList.map(item => (
                <Item title={item.title} desc={item.desc}/>
            ))}

            {customerArray}
        </>
    )
}

export default App