import {combineReducers} from "redux";
import todo from './todo/todo'
const rootReducer = () => combineReducers({todo});
export default rootReducer