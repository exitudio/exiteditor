import { combineReducers } from "redux";
import chatAppsReducer from "./chatApps/chatAppsReducer";
import applicationReduer from "./application/applicationReduer";
const indexReducer = combineReducers({
  application: applicationReduer,
  chatApps: chatAppsReducer,
});
export default indexReducer;
