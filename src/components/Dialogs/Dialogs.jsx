import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {
    let state=props.messagePage;
    let newMessageElement = React.createRef();
    let dialogElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.messageData.map(m => <Message message={m.message} />);
    let newMessageText=state.newMessageText;
    
    let addNewMessage=(value)=>{
        props.sendMessage(value.newMessageElement);
    }
    if(!props.isAuth){
        return <Navigate to="/login"/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}
let maxLength20=maxLengthCreator(20);
const AddMessageForm=(props)=>{
    return (
    <form onSubmit={props.handleSubmit} className={s.sendMessage}>
        <div>
            <Field component={Textarea} name="newMessageElement" placeholder='Enter new message'
            validate={[required, maxLength20]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>);
}
const AddMessageFormRedux=reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs;