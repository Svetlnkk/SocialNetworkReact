import { connect } from "react-redux";
import Profile from "./Profile";
import React, { useEffect } from 'react';
import { setUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
      if (!props.isAuth) {
        navigate("/login");
      }
    }, [props.isAuth, navigate]);

    return (
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 29235;
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }
  render() {

    return <Profile {...this.props} profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      isOwner={!this.props.router.params.userId} 
      savePhoto={this.props.savePhoto}/>
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
// let AuthRedirectComponent=withAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, {setUserProfile})(withRouter(AuthRedirectComponent));