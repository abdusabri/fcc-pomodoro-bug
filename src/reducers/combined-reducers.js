import { combineReducers } from "redux";
import breakLength from "./break-length-reducer";
import sessionLength from "./session-length-reducer";
import clock from "./clock-reducer";

export const appReducer = combineReducers({
  breakLength,
  sessionLength,
  clock
});
