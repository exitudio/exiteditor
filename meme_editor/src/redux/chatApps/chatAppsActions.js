import {
  CHAT_APPS_ADD_CHAT,
  CHAT_APPS_DELETE_CHAT,
  CHAT_APPS_UPDATE_CHAT,
} from "../actionTypes";

export const addChat = (side) => ({
  type: CHAT_APPS_ADD_CHAT,
  payload: side,
});

export const deleteChat = (id) => ({
  type: CHAT_APPS_DELETE_CHAT,
  payload: id,
});

export const updateChat = (id, key, value) => ({
  type: CHAT_APPS_UPDATE_CHAT,
  payload: { id, key, value },
});
