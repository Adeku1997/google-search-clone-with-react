

const INITIAL_STATE = {
  results: [],
};

const resultReducer = (state =INITIAL_STATE,action)=> {
    switch(action.type) {
        case "GET_DATA":
            return {
                ...state,
                results:action.payload

            };
            default:
                return state;
    }
}
export default resultReducer;