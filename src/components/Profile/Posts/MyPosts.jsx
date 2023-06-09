import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {
   let newPostElement=React.createRef();
    let postElements=props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    
    let addNewPost=(value)=>{
        props.addPost(value.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMessageFormRedux onSubmit={addNewPost}/>          
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    );
}
let maxLength20=maxLengthCreator(20);
const addNewPostForm=(props)=>{
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText" placeholder='Enter new post' 
            validate={[required, maxLength20]}/>
            {/* onChange={onPostChange} ref={newPostElement} value={props.newPostText} */}
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form> 
    );
}
const AddMessageFormRedux=reduxForm({form:'postAddNewPostForm'})(addNewPostForm);
export default MyPosts;