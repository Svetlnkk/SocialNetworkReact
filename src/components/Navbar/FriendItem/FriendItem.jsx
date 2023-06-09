import { NavLink } from 'react-router-dom';
import s from './../Navbar.module.css';

const FriendItem = (props) => {
    let path = "/friend/" + props.id;
    return (
        <div className={s.friendName}>
            <NavLink to={path} className={({ isActive }) =>
                isActive ? s.activeLink : undefined}>{props.name}</NavLink>
        </div>
    );
}
export default FriendItem;