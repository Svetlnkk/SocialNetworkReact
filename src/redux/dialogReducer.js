const SEND_MESSAGE='SEND-MESSAGE';

let initialState={
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
    ]
};

const dialogReducer = (state=initialState, action) =>{
    let stateCopy;
    switch(action.type){
        case SEND_MESSAGE:{            
            stateCopy={
                ...state,
                messageData: [...state.messageData, {id:4, message: action.newMessageElement}]
            };            
            return stateCopy;
        }        
        default:
            return state;
    }
}
export const sendMessageActionCreator =(newMessageElement)=>{
    return {type: SEND_MESSAGE, newMessageElement}
}
export default dialogReducer;