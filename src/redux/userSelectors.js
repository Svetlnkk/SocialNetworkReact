import { createSelector } from "reselect";

export const getAllUsers=(state)=>{
    return state.friendPage.users;
}
export const getAllUsersSuperSelector=createSelector(getAllUsers, (users)=>{
    return users.filter(u=>true);
})
export const getPageSize=(state)=>{
    return state.friendPage.pageSize;
}
export const getTotalUsersCount=(state)=>{
    return state.friendPage.totalUsersCount;
}
export const getCurrentPage=(state)=>{
    return state.friendPage.currentPage;
}
export const getIsFetching=(state)=>{
    return state.friendPage.isFetching;
}
export const getFollowingInProgress=(state)=>{
    return state.friendPage.followingInProgress;
}