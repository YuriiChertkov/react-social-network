import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "513de54f-835a-4c1f-b5d9-f306d4fed777" },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
  },

  async followUsers(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
  async unfollowUsers(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },

  async getLoginUser() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },

  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};
