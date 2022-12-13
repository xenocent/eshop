const INITIAL_STATE = []

export const productReducer = (state = INITIAL_STATE,action)=>{

    switch (action.type) {
        case "ADDPRODUCT":
            return {...state, products: action.payload}
        default:
            return state
    }
}