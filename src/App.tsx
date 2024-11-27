import './App.css'

function App() {
    function handleClick(type:string){
        console.log(type)
        alert(type)
    }
    return (
        <div>
            <button onClick={()=>{handleClick("handleClick")}}>submit</button>
        </div>
    )
}

export default App
