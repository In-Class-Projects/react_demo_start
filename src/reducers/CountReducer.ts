export const initialState = 0;

export function CountReducer ( state:number = initialState , action: {type: string, payload: number} ) {
    switch(action.type) {
        case 'ADD_COUNTER' :
            return state + action.payload;
        case 'REMOVE_COUNTER' :
            return state - action.payload;
        default:
            return state;
    }
}