import {createStore,compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers';

const initialState = {};
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const store = createStore(rootReducer(), initialState,composeFunc());

export default store
