import { createSelector } from "reselect";

//primitive selector
export const getMyClientsSelector = (state) => {
  return state.myClients.myClients;
}

//reselect library selector

export const getPageSize = (state) => {
  return state.myClients.pageSize;
}

export const getTotalCount = (state) => {
  return state.myClients.totalCount;
}

export const getCurrentPage = (state) => {
  return state.myClients.currentPage;
}

export const getIsFetching = (state) => {
  return state.myClients.isFetching;
}

export const getIsCustomerDeletingInProcess = (state) => {
  return state.myClients.isCustomerDeletingInProcess;
}

