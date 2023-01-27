import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/',
});

export const faqAPI = {
  
  getFaqItems() {
    return instance.get('faq/');
  }
}
