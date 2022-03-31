const INITIAL_STATE={
    loading:true
}

const loadingReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
    case 'SET_LOADING':
        return {
            ...state,
            loading:false

        };
        default:
            return state;
    }
}

export default loadingReducer;