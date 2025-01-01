export const initialState = {
    firstName: '',
    lastName: ''
};

export function NameReducer ( state = initialState , action: {type: string, payload: { firstName: string; lastName: string } } ) {
    switch(action.type) {
        case 'PRINT' :
            return state = action.payload;
        default:
            return state;
    }
}