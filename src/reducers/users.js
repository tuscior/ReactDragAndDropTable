import {
  USER_REMOVED,
  REORDER_USERS,
  FETCH_USERS,
  USER_EDITED
} from "../constants/index";

const initialState = {
  data: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case REORDER_USERS:
      return {
        ...state,
        data: action.payload
      };
    case USER_REMOVED:
      return {
        ...state,
        data: state.data.filter(
          user => action.payload.username !== user.username
        )
      };
    case USER_EDITED:
      return {
        ...state,
        data: state.data.map(user => {
          if (user._id === action.payload._id) {
            return {
              ...user,
              ...action.payload
            };
          }
          return user;
        })
      };
    default:
      return state;
  }
};
