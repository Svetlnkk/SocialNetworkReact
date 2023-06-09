import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let store={
    _state: {
        profilePage:{
            posts: [
                { id: 1, message: 'How are you?', likeCount: 15 },
                { id: 2, message: 'Hello world', likeCount: 10 },
                { id: 3, message: 'It\'s ok!', likeCount: 5 }
            ],
            newPostText: 'Enter new post'
            
        },
        messagesPage:{
            dialogsData: [
                { id: 1, name: 'Sveta' },
                { id: 2, name: 'Maria' },
                { id: 3, name: 'Kate' },
                { id: 4, name: 'Anton' },
                { id: 5, name: 'Artur' },
                { id: 6, name: 'Danil' }
            ],
            messageData: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Fine!' }
            ],
            newMessageText:'enter'
        },
        friendPage: {
            friendItem:[
                {id:1, name: 'Anton'},
                {id:2, name: 'Artur'},
                {id:3, name: 'Kate'}
            ]
        }    
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('State  changed');
    },
    subscribe (observer){
        this._callSubscriber=observer;
    },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.messagesPage=dialogReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);        
    }
}

export default store;