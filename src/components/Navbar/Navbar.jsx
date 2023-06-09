import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import FriendItem from './FriendItem/FriendItem';
const Navbar = (props) => {
    let friendElements=props.friendItem.map(f => <FriendItem name={f.name} id={f.id}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) =>
                    isActive ? s.activeLink : undefined}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({ isActive }) =>
                    isActive ? s.activeLink : undefined}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({ isActive }) =>
                    isActive ? s.activeLink : undefined}>
                    News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({ isActive }) =>
                    isActive ? s.activeLink : undefined}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className={({ isActive }) =>
                    isActive ? s.activeLink : undefined}>
                    Setting
                </NavLink>
            </div>
            <div className={s.itemFriend}>
                <NavLink to='/friend' className={({ isActive }) =>
                    isActive ? s.activeLink : undefined}>
                    Friend
                </NavLink>
            </div>
            <div className={s.friends}>
                {friendElements}
            </div>

        </nav>
    );

}
export default Navbar;