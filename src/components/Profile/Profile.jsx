import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './Posts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    if(!props.profile){
        return <Preloader/>
    }    
    return (
        <div className={s.content}>
            <ProfileInfo  isOwner={props.isOwner} 
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    );
}
export default Profile;