import {
  USER_REMOVED,
  REORDER_USERS,
  SET_CURRENT_USER,
  FETCH_USERS,
  EDIT_VIEW,
  PROFILE_VIEW,
  DELETE_VIEW,
  DEFAULT_VIEW,
  USER_EDITED
} from "../constants/index";
import UsersAPI from "../api/users";

export const fetchUsers = () => async dispatch => {
  const { data } = await UsersAPI.get();
  dispatch({
    type: FETCH_USERS,
    payload: data
  });
};

export const userEdit = user => async dispatch => {
  const { data } = await UsersAPI.put(`${user._id}`, user);
  console.log(data, user);
  dispatch({
    type: USER_EDITED,
    payload: data
  });
};

export const removeUser = user => async dispatch => {
  const { _ } = await UsersAPI.delete(`${user._id}`);
  dispatch({
    type: USER_REMOVED,
    payload: user
  });
};

export const reorderUsers = user => {
  return {
    type: REORDER_USERS,
    payload: user
  };
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const editView = user => {
  return {
    type: EDIT_VIEW,
    payload: user
  };
};

export const profileView = user => {
  return {
    type: PROFILE_VIEW,
    payload: user
  };
};
export const deleteView = user => {
  return {
    type: DELETE_VIEW,
    payload: user
  };
};

export const defaultView = user => {
  return {
    type: DEFAULT_VIEW,
    payload: null
  };
};
