import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: {id, email, login, isAuth} }
}

export const setAuth = () => {
    return (dispatch) => {
       authAPI.getAuthMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
       authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuth());
                } else{
                    let message=response.data.messages.length>0 ? response.data.messages[0] : "some error"
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
       authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}
export default authReducer;