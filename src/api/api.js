import axios from 'axios';

const instance=axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0409ff46-f36d-46a2-80dc-f971b715b582"
    }
})
export const usersAPI={
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{return response.data;});
    }
}

export const authAPI={
    getAuthMe(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

export const followAPI={
    deleteFriend(userId){
        return instance.delete(`follow/${userId}`)
    },
    postFriend(userId){
        return instance.post(`follow/${userId}`)
    }
}
export const profileAPI={
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}
