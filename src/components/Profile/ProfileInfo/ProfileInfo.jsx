import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>Image baner</div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                Ava + description
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <div>Contacts:</div>
                    <ul>
                        <li>Git: {props.profile.contacts.github}</li>
                        <li>VK: {props.profile.contacts.vk}</li>
                        <li>Facebook: {props.profile.contacts.facebook}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;