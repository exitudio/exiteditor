import { CHAT_APPS_ADD_CHAT, CHAT_APPS_UPDATE_CHAT } from "../actionTypes";
import { STATUS_READ } from "../../constants/chatConstant";
import initialState from "../initialState";

let id = 0;
const applicationReducer = (state = initialState.chatApps, action) => {
  switch (action.type) {
    case CHAT_APPS_ADD_CHAT: {
      const newChatElement = {
        id,
        side: action.payload,
        text: "",
        timestamp: "9.12 AM",
        status: STATUS_READ,
      };
      id += 1;
      return {
        ...initialState.chatApps,
        chatElements: [...state.chatElements, newChatElement],
      };
    }

    case CHAT_APPS_UPDATE_CHAT: {
      const { id, key, value } = action.payload;
      const newChatElements = [...state.chatElements];
      newChatElements[id] = { ...newChatElements[id] };
      newChatElements[id][key] = value;
      return {
        ...initialState.chatApps,
        chatElements: newChatElements,
      };
    }

    default:
      return state;
  }
};

export default applicationReducer;
