import { createSelector } from "reselect";

//primitive selector
export const getCustomersSelector = (state) => {
  return state.customers.customers;
}

//reselect library selector

export const getContactedCustomers = createSelector(getCustomersSelector,
  (customers) => {
    return customers.filter(customer => customer.status === true);
  }
);

export const getPageSize = (state) => {
  return state.customers.pageSize;
}

export const getTotalCount = (state) => {
  return state.customers.totalCount;
}

export const getCurrentPage = (state) => {
  return state.customers.currentPage;
}

export const getIsStatusChanging = (state) => {
  return state.customers.isStatusChanging;
}

export const getIsCustomerDeletingInProcess = (state) => {
  return state.customers.isCustomerDeletingInProcess;
}

export const getIsFetching = (state) => {
  return state.customers.isFetching;
}

