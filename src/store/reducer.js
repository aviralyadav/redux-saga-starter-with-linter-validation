const initialState = {
    age:20,
    users: []
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP_ASYNC': 
            newState.age += action.value;
            break;
        
        case 'AGE_DOWN_ASYNC': 
            newState.age -= action.value;
            break;
        case 'RECEIVE_USERS': 
        return {...state, users: action.users}; 
        default: return newState;
    }
    return newState;
};

export default reducer;