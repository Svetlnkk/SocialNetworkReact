import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageElement) => {
            dispatch(sendMessageActionCreator(newMessageElement));
        }

    }
}

// let AuthRedirectComponent=withAuthRedirect(Dialogs);

// const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);