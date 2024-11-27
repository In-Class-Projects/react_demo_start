import './App.css'

import ButtonComponent from "./components/ButtonComponent.tsx";

function App() {

    let content : string = "DashBoard"

    function handleClick(type:string){
        console.log('click')
        alert(type + ' clicked')
        content = type
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
