import './App.css'
import {FancyButton, SmallButton} from "./Button.tsx"
import Button from "./Button.tsx"
function App() {

    const content : string = "Hello, World!"

    const bool : boolean = true;
    let contentOfBool : string;

    if (bool) {
        contentOfBool = "True";
    } else {
        contentOfBool = "False";
    }


    return (
        <>
            {1+1}
            {content}
            {contentOfBool}
            {bool ? "True" : "False"}
            <Button></Button>
            <FancyButton/>
            <SmallButton/>
        </>
    )
}

export default App
