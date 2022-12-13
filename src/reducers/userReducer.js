const INITIAL_STATE = {
    id:0,
    username:'',
    email:'',
    role:'',
}

export const userReducer = (state = INITIAL_STATE,action)=>{
    // action menerima 2 prop --> type dan payload
    console.log("data dari fungsi action =>",action);
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {...state, ...action.payload}
        case "LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    }
}