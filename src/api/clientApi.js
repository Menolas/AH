import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:3030/'
});

export const clientsAPI = {

  getClients(pageSize = 5, currentPage = 1) {
    return instance.get(`clients?&page=${currentPage}&limit=${pageSize}`);
  },

  getClientProfile(clientId) {
    return instance.get(`clients/${clientId}`);
  },

  updateContactField(clientId, contactTitle, contactFieldValue) {
    return instance.post(`clients/updateContact/${clientId}`, {
      contactTitle: contactTitle,
      contactFieldValue: contactFieldValue
    });
  },

  deleteMyClient(clientId) {
    return instance.delete(`clients/${clientId}`);
  },

  addClient(
    fullName,
    avatar,
    contact,
    contactValue,
    file
  ) {
    return instance.post('clients', {
      fullName,
      avatar,
      contact,
      contactValue,
    }, file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  updateClientAvatar(clientId, file) {
    debugger;
    const formData = new FormData();
    formData.append('avatar', file);
    return instance.post(`clients/avatar/${clientId}`, formData );
  }
}
