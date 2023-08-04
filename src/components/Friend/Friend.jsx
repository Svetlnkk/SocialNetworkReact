import React from 'react';
import User from './User';
import Paginator from '../../Paginator/Paginator';

let Friend = ({currentPage, onPageNumber, totalUsersCount, pageSize, ...props}) => {
    
    return <div>
        <Paginator currentPage={currentPage} onPageNumber={onPageNumber} totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
        {
            props.users.map(u =>
                <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                unfollow={props.unfollow} follow={props.follow}/>
            )
        }
        </div>
    </div>
}
export default Friend;