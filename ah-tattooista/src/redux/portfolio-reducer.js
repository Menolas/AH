import { galleryApi } from '../api/galleryApi';

const SET_STYLES = 'SET_STYLES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_ACTIVE_STYLE = 'SET_ACTIVE_STYLE';
const SET_GALLERY_ITEMS = 'SET_GALLERY_ITEMS';
const SET_ACTIVE_GALLERY = 'SET_ACTIVE_GALLERY';
const SHOW_GALLERY_LARGE_IMAGE = 'SHOW_GALLERY_LARGE_IMAGE';
const CLOSE_LARGE_IMAGE = 'CLOSE_LARGE_IMAGE';

let initialState = {
  isFetching: false,
  tattooStyles: [],
  activeStyle: {},
  gallery: [],
  activeGallery: [],
  imgLargeUrl: '', 
}

//Black@Gray
//FineLine
//BlackWork
//NeoTraditional
//Realistic
//Designs
//OldSchool

const portfolioReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case TOGGLE_IS_FETCHING:

      return {
        ...state,
        isFetching: action.isFetching,
      }

    case SET_STYLES:
      
      return {
        ...state,
        tattooStyles: action.tattooStyles
      }

    case SET_ACTIVE_STYLE:
      
      return {
        ...state,
        activeStyle: action.style
      };
    
    case SET_ACTIVE_GALLERY:

      return {
        ...state,
        activeGallery: action.gallery
      }
    
    case SET_GALLERY_ITEMS:

      return {
        ...state,
        gallery: action.gallery
      }
    
    case SHOW_GALLERY_LARGE_IMAGE:
      
      return {
        ...state,
        imgLargeUrl: action.imgUrl,
      };
    
    case CLOSE_LARGE_IMAGE:

      return {
        ...state,
        imgLargeUrl: '',
      };
  
    default: return {
      ...state
    };
  }
}

//action creators

export const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING, isFetching
  }
);

export const setTattooStyles = (tattooStyles) => (
  {
    type: SET_STYLES, tattooStyles
  }
);

export const setActiveStyle = (style) => (
  {
    type: SET_ACTIVE_STYLE, style
  }
);

export const setGalleryItems = (gallery) => (
  {
    type: SET_GALLERY_ITEMS, gallery
  }
);

export const setActiveGallery = (gallery) => (
  {
    type: SET_ACTIVE_GALLERY, gallery
  }
);

export const showGalleryLargeImage = (imgUrl) => (
  {
    type: SHOW_GALLERY_LARGE_IMAGE, imgUrl
  }
);

export const closeGalleryLargeImage = () => (
  {
    type: CLOSE_LARGE_IMAGE
  }
);


//thunks

export const getGalleryItems = (style) => async (dispatch) => {
  //debugger;
  dispatch(setIsFetching(true));
  try {
    let response = await galleryApi.getGalleryItems();
    dispatch(setGalleryItems(response.data));
    let activeGallery = [...response.data].filter(item => item.categories.includes(style.value));
    dispatch(setActiveGallery(activeGallery));
    dispatch(setIsFetching(false));
  } catch (e) {
    console.log(e);
  }
}

export const getTattooStyles = () => async (dispatch) => {
  //debugger;
  dispatch(setIsFetching(true));
  try {
    let response = await galleryApi.getCategories(); 
    dispatch(setTattooStyles(response.data));
    dispatch(setActiveStyle(response.data[0]));
    dispatch(getGalleryItems(response.data[0]));
    dispatch(setIsFetching(false));
  } catch (e) {
    console.log(e);
  }
}

export const changeActiveStyle = (style) => async (dispatch) => {
  dispatch(setActiveStyle(style));
  let response = await galleryApi.getGalleryItems();
  dispatch(setGalleryItems(response.data));
  let activeGallery = [...response.data].filter(item => item.categories.includes(style.value));
  dispatch(setActiveGallery(activeGallery));
}

export default portfolioReducer;
