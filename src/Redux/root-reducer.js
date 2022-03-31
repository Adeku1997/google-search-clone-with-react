import {combineReducers} from 'redux';
import resultReducer from './Results/resultReducers';
import loadingReducer from './Loading/loadingReducer';


const rootReducer = combineReducers({
result:resultReducer,
loading:loadingReducer
})

export default rootReducer;