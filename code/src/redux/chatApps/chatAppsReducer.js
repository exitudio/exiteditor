import {
  CHAT_APPS_ADD_CHAT,
  CHAT_APPS_DELETE_CHAT,
  CHAT_APPS_UPDATE_CHAT,
  CHAT_APPS_RESET,
  CHAT_APPS_TOGGLE_NEW_REPLY_PROFILE,
} from "../actionTypes";
import { STATUS_READ } from "../../constants/chatConstant";
import initialState from "../initialState";
import { getElementIndexById, isGroupFromElements } from "../../helpers";

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
        isNewReplyProfile: false,
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
      const index = getElementIndexById(newChatElements, id);
      newChatElements[index] = { ...newChatElements[index] };
      newChatElements[index][key] = value;
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

    case CHAT_APPS_TOGGLE_NEW_REPLY_PROFILE: {
      const id = action.payload;
      const newChatElements = [...state.chatElements];
      const index = getElementIndexById(newChatElements, id);
      newChatElements[index] = { ...newChatElements[index] };
      newChatElements[index].isNewReplyProfile = !newChatElements[index]
        .isNewReplyProfile;

      if (isGroupFromElements(newChatElements)) {
        newChatElements[0] = { ...newChatElements[0] };
        newChatElements[0].isNewReplyProfile = true;
      }
      return {
        ...state,
        chatElements: newChatElements,
      };
    }

    default:
      return state;
  }
};

export default chatAppsReducer;
