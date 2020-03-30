import {
  EDIT_VIEW,
  PROFILE_VIEW,
  DELETE_VIEW,
  DEFAULT_VIEW
} from "../constants/index";

const initialState = {
  editView: false,
  profileView: false,
  showModal: false,
  deleteView: false,
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_VIEW:
      return {
        ...state,
        editView: true,
        showModal: true,
        currentUser: action.payload
      };
    case PROFILE_VIEW:
      return {
        ...state,
        profileView: true,
        showModal: true,
        currentUser: action.payload
      };
    case DELETE_VIEW:
      return {
        ...state,
        deleteView: true,
        showModal: true,
        currentUser: action.payload
      };
    case DEFAULT_VIEW:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
