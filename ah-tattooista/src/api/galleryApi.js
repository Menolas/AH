import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:3030/'
});

export const galleryApi = {

  getCategories() {
    return instance.get('category/');
  },

  getGalleryItems() {
    return instance.get('gallery/');
  }
}
