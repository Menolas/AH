const SET_PAGE_URL = 'SET_PAGE_URL';

let initialState = {
  pageUrl: 'customers',
}

const adminReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_PAGE_URL:
      return {
        ...state,
        pageUrl: action.pageUrl,
      };
    default: return state;
  }
}

export const setPageUrl = (pageUrl) => (
  {
    type: SET_PAGE_URL,
    pageUrl: pageUrl,
  }
)

export default adminReducer;
