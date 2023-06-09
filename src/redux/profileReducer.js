import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'How are you?', likeCount: 15 },
        { id: 2, message: 'Hello world', likeCount: 10 },
        { id: 3, message: 'It\'s ok!', likeCount: 5 }
    ],
    newPostText: 'Enter new post',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => {
    return { type: ADD_POST, newPostText}
}
export const setUserProfileSuccess = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}
export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileSuccess(response.data));
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}
export default profileReducer;