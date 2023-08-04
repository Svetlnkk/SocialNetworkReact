import { reduxForm } from "redux-form";
import { Input, Textarea, createField } from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({error, ...props}) => {
    return <form onSubmit={props.handleSubmit()}>
        <div><b>Full name:</b>{createField("Full name", "fullName", Input, [])}</div>
        <div>
            <div>
                <b>Looking for a job</b>: {createField(null, "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
                <div>
                    <b>My professional skills:</b> {createField("My professional skills", "lookingForAJobDescription", Textarea, [])}
                </div>
        </div>
        <div>
            <b>About me:</b> {createField("About me", "aboutMe", Textarea, [])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key} : {createField(key, "contacts." + key, Input, [])}</b>
                </div>
            })}
        </div>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>{error}</div>}
    </form>
}
const ProfileDataFormReduxForm=reduxForm({form: 'editProfile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;