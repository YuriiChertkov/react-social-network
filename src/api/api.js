import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "513de54f-835a-4c1f-b5d9-f306d4fed777" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followUsers(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  getLoginUser (){
      return instance.get (`auth/me`).then((response)=>{
          return response.data;
      })
  },
};
