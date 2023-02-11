import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/',
});

export const serviceAPI = {
  
  getServices() {
    return instance.get('services/');
  }
}
