const initialState = {}

export const isinReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ISINS':
            return action.payload
        default:
            return state
    }
}
