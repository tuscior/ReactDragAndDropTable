import { combineReducers } from "redux";
import usersReducer from "./users";
import viewsReducer from "./views";

export default combineReducers({
  users: usersReducer,
  views: viewsReducer
});
