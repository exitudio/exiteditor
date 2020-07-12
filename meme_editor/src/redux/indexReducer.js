import { combineReducers } from "redux";
import chatAppsReducer from "./chatApps/chatAppsReducer";
const indexReducer = combineReducers({ chatApps: chatAppsReducer });
export default indexReducer;
