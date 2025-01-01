import './App.css'
import {useReducer} from "react";

const initialState = 0;

function CountReducer ( state:number = initialState , action: {type: string, payload: number} ) {
    switch(action.type) {
        case 'ADD_COUNTER' :
            return state + action.payload;
        case 'REMOVE_COUNTER' :
            return state - action.payload;
        default:
            return state;
    }
}

function App() {

    const [count, dispatch] = useReducer(CountReducer, initialState)
    return (
        <>
            {count}
            <button onClick={()=> dispatch({type: 'ADD_COUNTER', payload: 1})}>Increment</button>
            <button onClick={()=> dispatch({type: 'REMOVE_COUNTER', payload: 1})}>Increment</button>
        </>
    )
}

export default App