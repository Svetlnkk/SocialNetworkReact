import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendReducer from "./friendReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";

let reducers=combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    friendPage: friendReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;