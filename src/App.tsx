import './App.css'
import {FancyButton, SmallButton} from "./Button.tsx"
import Button from "./Button.tsx"
function App() {

    const content : string = "Hello, World!"

    return (
        <>
            {1+1}
            {content}
            <Button></Button>
            <FancyButton/>
            <SmallButton/>
        </>
    )
}

export default App
