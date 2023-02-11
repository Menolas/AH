import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/',
});

export const authAPI = {

  me(token = "") {
    //debugger;
    return instance.get('auth/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  login(username, password) {
    return instance.post('auth/login', { username, password });
  },

  logout(userId) {
    return instance.delete(`auth/logout/${userId}`);
  }
}
