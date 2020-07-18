import {
  CHAT_APPS_ADD_CHAT,
  CHAT_APPS_DELETE_CHAT,
  CHAT_APPS_UPDATE_CHAT,
  CHAT_APPS_RESET,
} from "../actionTypes";
import { STATUS_READ } from "../../constants/chatConstant";
import initialState from "../initialState";

let id = 0;
const chatAppsReducer = (state = initialState.chatApps, action) => {
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
        ...state,
        chatElements: [...state.chatElements, newChatElement],
      };
    }

    case CHAT_APPS_DELETE_CHAT: {
      const id = action.payload;
      const newChatElements = [...state.chatElements].filter((element) => {
        return element.id !== id;
      });
      return {
        ...state,
        chatElements: newChatElements,
      };
    }

    case CHAT_APPS_UPDATE_CHAT: {
      const { id, key, value } = action.payload;
      const newChatElements = [...state.chatElements];
      newChatElements[id] = { ...newChatElements[id] };
      newChatElements[id][key] = value;
      return {
        ...state,
        chatElements: newChatElements,
      };
    }

    case CHAT_APPS_RESET: {
      return {
        ...state,
        chatElements: initialState.chatApps.chatElements,
      };
    }

    default:
      return state;
  }
};

export default chatAppsReducer;
