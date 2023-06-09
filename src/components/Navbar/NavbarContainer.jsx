import Navbar from './Navbar';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        friendItem: state.friendPage.friendItem
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {}
}
const NavbarContainer=connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;