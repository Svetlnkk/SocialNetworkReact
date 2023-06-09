import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) =>{
    let path="/dialogs/" + props.id;
    return(
        <div className={s.dialog}>
            <NavLink to={path} className={({ isActive }) =>
                isActive ? s.activeLink : undefined}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;