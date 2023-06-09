import { follow, unfollow, toggleFollowingProgress, getUsers } from "../../redux/friendReducer";
import { connect } from 'react-redux';
import Friend from './Friend';
import React from 'react';
import Preloadre from "../common/Preloader/Preloader";



class FriendContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageNumber = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloadre /> : null}
            <Friend totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageNumber={this.onPageNumber}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friendPage.users,
        pageSize: state.friendPage.pageSize,
        totalUsersCount: state.friendPage.totalUsersCount,
        currentPage: state.friendPage.currentPage,
        isFetching: state.friendPage.isFetching,
        followingInProgress: state.friendPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }
export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers
})(FriendContainer);