import Header from "./Header";
import React from 'react';
import { connect } from "react-redux";
import { setAuth, logout } from "../../redux/authReducer";

class HeaderComponent extends React.Component {
    componentDidMount() {
        this.props.setAuth();
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, { setAuth, logout })(HeaderComponent);