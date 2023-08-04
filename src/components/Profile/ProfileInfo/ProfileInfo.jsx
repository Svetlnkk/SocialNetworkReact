import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/users.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.userPhoto} />
                <label htmlFor="filePicker" style={{background: "grey"}}>
                    Изменить фото профиля
                </label>
                {props.isOwner && <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={onMainPhotoSelected} />}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
    );
}
const ProfileData = (props) => {
    return <div>
        <div>{props.profile.fullName}</div>
        <div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
            }
        </div>
        <div>
            <b>About me:</b>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>
        {/* {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>} */}
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;