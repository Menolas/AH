import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/'
});

export const customersAPI = {

  getCustomers(pageSize = 5, currentPage = 1) {
    return instance.get(`customers?&page=${currentPage}&limit=${pageSize}`)
      .then(response => {
        
        return response.data;
      });
  },

  contactCustomer(customerId) {
    return instance.patch(`customers/contact/${customerId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  unContactCustomer(customerId) {
    return instance.patch(`customers/unContact/${customerId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  deleteCustomer(customerId) {
    //debugger;
    return instance.delete(`customers/${customerId}`)
      .then(response => {
        //debugger;
        return response.data;
      });
  },

  addCustomer(
    name,
    contact,
    contactValue,
    message
  ) {
    debugger;
    return instance.post('customers', {
      name,
      contact,
      contactValue,
      message
    });
  },

  turnCustomerToClient(fullName, contacts) {
    debugger;
    return instance.post('clients/customerToClient', {
      fullName,
      contacts
    });
  }
}
