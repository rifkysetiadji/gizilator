import {combineReducers} from 'redux';
import giziReducer from './giziReducer';

export default combineReducers({
    gizi:giziReducer
})